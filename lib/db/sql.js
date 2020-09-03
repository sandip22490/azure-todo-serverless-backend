import { Sequelize, DataTypes } from 'sequelize';
import * as tedious from 'tedious';
import { v4 as uuidv4 } from 'uuid';

import { CONN_STR, TABLES, INVITATION_STATUS } from '../common/constant';
import { maskFields } from '../common/utility';

const schema = {
  [TABLES.GROUP]: {
    todoId: null,
    title: null,
    description: null,
    isCompleted: null,
    CreatedBy: null,
    CreatedDateTime: null,
    UpdatedBy: null,
    UpdatedDateTime: null,
  },
};

// eslint-disable-next-line no-underscore-dangle
DataTypes.DATE.prototype._stringify = function (date, options) {
  // eslint-disable-next-line no-underscore-dangle
  date = this._applyTimezone(date, options);
  return date.format('YYYY-MM-DD HH:mm:ss.SSS');
}.bind(DataTypes.DATE.prototype);

export default new Sequelize(CONN_STR, {
  dialect: 'mssql',
  dialectModule: tedious,
  dialectOptions: {
    options: {
      encrypt: true,
      appName: 'sandip-todo',
    },
  },
  logging: (...msg) => console.log(JSON.stringify(msg, maskFields, 2)),
});

export const buildParams = (record, tableName) => {
  const newRecord = tableName ? { ...schema[tableName], ...record } : record;
  return { params: Object.keys(newRecord).map((key) => `@${key} = :${key}`).join(', '), replacements: newRecord };
};
