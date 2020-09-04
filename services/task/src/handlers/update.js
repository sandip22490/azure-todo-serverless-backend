import { Task } from '../../../../lib/models';
import { RequestParser, ResponseBuilder } from '../../../../lib/common';

export default async (context, req) => {
  try {
    const reqParser = new RequestParser(context, req);
    const {
      httpMethod, reqPath, subId,
    } = reqParser.getDefaultParams();

    context.log(`updateTaskHandler: ${JSON.stringify({
      httpMethod, reqPath, subId,
    })}`);

    const taskId = reqParser.getReqParam('task_id', true);
    const body = reqParser.getBody();

    const [affectedRows, [todo]] = await Task.update({ ...body, updatedBy: subId }, { where: { taskId }, returning: true });

    context.res = ResponseBuilder.success({
      body: { todo },
    });
  } catch (error) {
    context.res = ResponseBuilder.fail({ error });
  } finally {
    context.done();
  }
};
