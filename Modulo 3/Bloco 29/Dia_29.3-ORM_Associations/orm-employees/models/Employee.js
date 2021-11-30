// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    // Employee.hasOne(models.Address, // hasOne para relacionamentos 1X1 - exibe 1 resultado
    Employee.hasMany(models.Address, // hasMany para relacionamentos 1XN - trz vários resultados
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Employee;
};
