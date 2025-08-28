'use strict';

const {v4:uuidv4} = require("uuid")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        id: uuidv4(),
        email: 'patrick.mydata@gmail.com',
        title: 'Seeder Test',
        description: 'My new Seeder',
        author: 'Patrick',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  },
};
