# azure-todo-serverless-backend
Azure Serverless APIs using function, apim &amp; serverless framework

# Running locally
- navigate to your project root directory and open `node_modules\serverless-azure-functions\lib\shared\utils.js` file in any of your code editor.
- replace `Line No: 285` with below code -

  ```
  var localCommand = path_1.join(serverless.config.servicePath.replace(serverless.service.service, ''), "node_modules", ".bin", command);
  ```