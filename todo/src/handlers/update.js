import { Todo } from '../../../lib/db';
import { RequestParser, ResponseBuilder } from '../../../lib/common';

export default async (context, req) => {
  try {
    const reqParser = new RequestParser(context, req);
    const {
      httpMethod, reqPath, subId,
    } = reqParser.getDefaultParams();

    context.log(`updateTodoHandler: ${JSON.stringify({
      httpMethod, reqPath, subId,
    })}`);

    const todoId = reqParser.getReqParam('todo_id', true);
    const body = reqParser.getBody();

    const todo = await Todo.update(todoId, body);

    context.res = ResponseBuilder.success({
      body: { todo },
    });
  } catch (error) {
    context.res = ResponseBuilder.fail({ error });
  } finally {
    context.done();
  }
};
