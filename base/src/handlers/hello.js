import { RequestParser, ResponseBuilder } from '../../../lib/common';

export default async (context, req) => {
  try {
    const reqParser = new RequestParser(context, req);
    const {
      httpMethod, reqPath, subId,
    } = reqParser.getDefaultParams();

    context.log(`helloHandler: ${JSON.stringify({
      httpMethod, reqPath, subId,
    })}`);

    context.res = ResponseBuilder.success({
      body: { message: 'Hello from azure serverless world!' },
    });
  } catch (error) {
    context.res = ResponseBuilder.fail({ error });
  } finally {
    context.done();
  }
};
