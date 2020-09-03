import { Todo } from '../../../lib/db';
import { RequestParser, ResponseBuilder } from '../../../lib/common';

export default async (context, req) => {
  try {
    const reqParser = new RequestParser(context, req);
    const {
      subId,
    } = reqParser.getDefaultParams();

    context.log(`listTodoHandler: ${JSON.stringify({
      httpMethod, reqPath, subId,
    })}`);

    const todos = await Todo.list();

    context.res = ResponseBuilder.success({
      body: { todos },
    });
  } catch (error) {
    context.res = ResponseBuilder.fail({ error });
  } finally {
    context.done();
  }
};
