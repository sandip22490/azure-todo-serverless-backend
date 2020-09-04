import { Sequelize } from 'sequelize';
import * as tedious from 'tedious';

import { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_INSTANCE } from '../common/constant';
import { maskFields } from '../common/utility';

export default new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  dialect: 'mssql',
  host: DB_HOST,
  dialectModule: tedious,
  port: 1433,
  dialectOptions: {
    options: {
      // encrypt: true,
      instanceName: DB_INSTANCE,
      appName: 'sandip-todo',
    },
    define: {
      freezeTableName: true,
    },
  },
  logging: (...msg) => console.log(JSON.stringify(msg, maskFields, 2)),
});
