import { Task } from '../../../../lib/models';
import { RequestParser, ResponseBuilder } from '../../../../lib/common';
import { RECORD_DELETED } from '../../../../lib/common/constant';

export default async (context, req) => {
  try {
    const reqParser = new RequestParser(context, req);
    const {
      httpMethod, reqPath, subId,
    } = reqParser.getDefaultParams();

    context.log(`rmTaskHandler: ${JSON.stringify({
      httpMethod, reqPath, subId,
    })}`);

    const taskId = reqParser.getReqParam('task_id');
    const affectedRows = await Task.destroy({ where: { taskId } });

    context.res = ResponseBuilder.success({
      body: RECORD_DELETED,
    });
  } catch (error) {
    context.res = ResponseBuilder.fail({ error });
  } finally {
    context.done();
  }
};
