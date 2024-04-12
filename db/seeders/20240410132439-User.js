/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      email: 'admin@gmail.com',
      password: await bcrypt.hash('admin', 10),
      isAdmin: true,
    },
    {
      name: 'Maria',
      email: 'maria@gmail.com',
      password: await bcrypt.hash('maria', 10),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
