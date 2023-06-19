'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        comment: 'comment1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        comment: 'comment2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        comment: 'comment3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        comment: 'comment1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        comment: 'comment1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
