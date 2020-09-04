import { Task } from '../../../../lib/models';
import { RequestParser, ResponseBuilder } from '../../../../lib/common';

export default async (context, req) => {
  try {
    const reqParser = new RequestParser(context, req);
    const {
      httpMethod, reqPath, subId,
    } = reqParser.getDefaultParams();

    context.log(`listTaskHandler: ${JSON.stringify({
      httpMethod, reqPath, subId,
    })}`);

    const todos = await Task.findAll({ where: { subId } });

    context.res = ResponseBuilder.success({
      body: { todos },
    });
  } catch (error) {
    context.res = ResponseBuilder.fail({ error });
  } finally {
    context.done();
  }
};
