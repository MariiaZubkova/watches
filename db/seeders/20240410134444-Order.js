'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Order', [{
      title: 'супер часы',
      description: 'описание суууупер часов',
      img: '../../img/istockphoto-1180244659-612x612.webp',
      userId: '2',
    }], {});
  },
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
