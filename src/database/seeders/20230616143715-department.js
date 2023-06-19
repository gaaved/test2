'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Departments', [
        {
          userId: 1,
          departmentName: 'department1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          departmentName: 'department2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          departmentName: 'department3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Departments', null, {});
    }
  };
