'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Users', 'phone_num', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Users', 'phone_num');
  }
};
