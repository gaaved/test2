'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John1',
        age: 18,
        imageName: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John2',
        age: 19,
        imageName: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John3',
        age: 20,
        imageName: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
