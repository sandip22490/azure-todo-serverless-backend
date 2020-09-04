import { Task } from '../../../../lib/models';
import { RequestParser, ResponseBuilder } from '../../../../lib/common';

export default async (context, req) => {
  try {
    const reqParser = new RequestParser(context, req);
    const {
      httpMethod, reqPath, subId,
    } = reqParser.getDefaultParams();

    context.log(`getTaskHandler: ${JSON.stringify({
      httpMethod, reqPath, subId,
    })}`);

    const taskId = reqParser.getReqParam('task_id', true);
    const task = await Task.findByPk(taskId);

    context.res = ResponseBuilder.success({
      body: { task },
    });
  } catch (error) {
    context.res = ResponseBuilder.fail({ error });
  } finally {
    context.done();
  }
};
