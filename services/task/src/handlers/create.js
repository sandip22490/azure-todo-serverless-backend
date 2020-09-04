import { Task } from '../../../../lib/models';
import { RequestParser, ResponseBuilder } from '../../../../lib/common';
import { CREATED } from '../../../../lib/common/errorCodes';

export default async (context, req) => {
  try {
    const reqParser = new RequestParser(context, req);
    const {
      httpMethod, reqPath, subId,
    } = reqParser.getDefaultParams();

    context.log(`createTaskHandler: ${JSON.stringify({
      httpMethod, reqPath, subId,
    })}`);

    const body = reqParser.getBody();
    const todo = await Task.create({ ...body, subId, createdBy: subId });

    context.res = ResponseBuilder.success({
      body: { todo },
      status: CREATED,
    });
  } catch (error) {
    context.res = ResponseBuilder.fail({ error });
  } finally {
    context.done();
  }
};
