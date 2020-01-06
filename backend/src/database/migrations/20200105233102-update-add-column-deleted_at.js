module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('students', 'deleted_at', {
      type: Sequelize.DATE,
      defaultValue: null,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('students', 'deleted_at');
  },
};
