"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "demo",
      [
        {
          title: "title1",
          mark: "mark 1111111",
          count: 1,
          acitve: true,
          dataTime: new Date(),
        },
        {
          title: "title2",
          mark: "mark 2222222",
          count: 2,
          acitve: true,
          dataTime: new Date(),
        },
        {
          title: "title3",
          mark: "mark 3333333",
          count: 3,
          acitve: false,
          dataTime: new Date(),
        },
        {
          title: "title4",
          mark: "mark 444444",
          count: 4,
          acitve: true,
          dataTime: new Date(),
        },
        {
          title: "title5",
          mark: "mark 555555",
          count: 5,
          acitve: true,
          dataTime: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("demo", null, {});
    // delete table if necessary   to use reset-db command in package.json
    await queryInterface.dropTable("demo");
  },
};
