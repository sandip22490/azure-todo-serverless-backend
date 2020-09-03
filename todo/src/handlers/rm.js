import { Todo } from '../../../lib/db';
import { RequestParser, ResponseBuilder } from '../../../lib/common';
import { RECORD_DELETED } from '../../../lib/common/constant';

export default async (context, req) => {
  try {
    const reqParser = new RequestParser(context, req);
    const {
      httpMethod, reqPath, subId,
    } = reqParser.getDefaultParams();

    context.log(`rmTodoHandler: ${JSON.stringify({
      httpMethod, reqPath, subId,
    })}`);

    const todoId = reqParser.getReqParam('todo_id');
    await Todo.rm(todoId);

    context.res = ResponseBuilder.success({
      body: RECORD_DELETED,
    });
  } catch (error) {
    context.res = ResponseBuilder.fail({ error });
  } finally {
    context.done();
  }
};
