import { DataTypes } from 'sequelize';
import sequelize from './sql';

export default sequelize.define('Task', {
  taskId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  subId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  updatedBy: {
    type: DataTypes.UUID,
    allowNull: true,
  },
}, {

});
