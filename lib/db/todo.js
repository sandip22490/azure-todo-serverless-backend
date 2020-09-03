/* Global Imports */
import { QueryTypes } from 'sequelize';

/* Local Imports */
import sequelize, { buildParams } from './sql';
import AppError from '../common/appError';
import {
  TODO_NOT_FOUND, NOT_FOUND, TODO_CREATE_FAILED, TODO_UPDATE_FAILED, TODO_DELETE_FAILED,
} from '../common/errorCodes';
import { TABLES } from '../common/constant';
import { getInsertedId, getRowCount } from '../common/utility';

export default class Organization {
  static async list() {
    const todos = await sequelize.query('EXEC [dbo].[sp_Todo_SelectAll]', {
      type: QueryTypes.SELECT,
    });

    return todos;
  }

  static async get(todoId) {
    const { params, replacements } = buildParams({ todoId });

    const [todo] = await sequelize.query(`EXEC [dbo].[sp_Todo_Select] ${params}`, {
      type: QueryTypes.SELECT,
      replacements,
    });

    if (todo) {
      return todo;
    }

    throw new AppError(TODO_NOT_FOUND, `todo with todoId: ${todoId} does not exists.`, NOT_FOUND);
  }

  static async create(record) {
    try {
      const { params, replacements } = buildParams(record, TABLES.TODO);

      const todoId = await sequelize.query(`EXEC [dbo].[sp_Todo_Insert] ${params}`, {
        type: QueryTypes.INSERT,
        replacements,
      });

      return { ...replacements, todoId: getInsertedId(todoId) };
    } catch (error) {
      throw new AppError(TODO_CREATE_FAILED, error.message);
    }
  }

  static async update(todoId, record) {
    try {
      const { params, replacements } = buildParams({ todoId, ...record }, TABLES.TODO);

      let rowCount = await sequelize.query(`EXEC [dbo].[sp_Todo_Update] ${params}`, {
        type: QueryTypes.UPDATE,
        replacements,
      });

      rowCount = getRowCount(rowCount);

      if (rowCount) {
        return replacements;
      }

      throw new AppError(TODO_UPDATE_FAILED, `Unable to find record with todoId: ${todoId}`, NOT_FOUND);
    } catch (error) {
      throw new AppError(TODO_UPDATE_FAILED, error.message);
    }
  }

  static async rm(todoId) {
    try {
      const { params, replacements } = buildParams({ todoId });

      let rowCount = await sequelize.query(`EXEC [dbo].[sp_Todo_Delete] ${params}`, {
        type: QueryTypes.DELETE,
        replacements,
      });

      rowCount = getRowCount(rowCount);

      if (rowCount) {
        return;
      }

      throw new AppError(TODO_UPDATE_FAILED, `Unable to find record with todoId: ${todoId}`, NOT_FOUND);
    } catch (error) {
      throw new AppError(TODO_DELETE_FAILED, error.message);
    }
  }
}
