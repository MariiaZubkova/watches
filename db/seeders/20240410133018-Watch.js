/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Watches', [
      {
        title: 'супер часы',
        description: 'описание суууупер часов',
        img: '/img/istockphoto-1180244659-612x612.webp',
      },
      {
        title: 'мечты',
        description: 'описание супер кайф',
        img: '/img/istockphoto-1180244659-612x612.webp',
      },
      {
        title: 'швейцарские',
        description: 'описание швейцарских часов',
        img: '/img/istockphoto-1180244659-612x612.webp',
      },
      {
        title: 'часы бывшей',
        description: 'описание слез радости',
        img: '/img/istockphoto-1180244659-612x612.webp',
      },
      {
        title: 'паша',
        description: 'описание часов паши',
        img: '/img/istockphoto-1180244659-612x612.webp',
      },
      {
        title: 'часы кака',
        description: 'описание кака',
        img: '/img/istockphoto-1180244659-612x612.webp',
      },
    ], {});
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
