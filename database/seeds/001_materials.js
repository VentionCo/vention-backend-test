/**
 * @param {import('knex').Knex} knex
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('materials')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        {
          id: 1,
          name: 'Iron',
          power_level: 100,
          qty: 50,
          deleted_at: null
        },
        {
          id: 2,
          name: 'Steel',
          power_level: 20,
          qty: 1,
          deleted_at: null
        },
        {
          id: 3,
          name: 'Bronze',
          power_level: 60,
          qty: 120,
          deleted_at: null
        },
        {
          id: 4,
          name: 'Copper',
          power_level: 10,
          qty: 70,
          deleted_at: null
        },
        {
          id: 5,
          name: 'Wood',
          power_level: 30,
          qty: 30,
          deleted_at: null
        },
        {
          id: 6,
          name: 'Leather',
          power_level: 80,
          qty: 45,
          deleted_at: null
        },
        {
          id: 7,
          name: 'Bone',
          power_level: 50,
          qty: 150,
          deleted_at: null
        },
        {
          id: 8,
          name: 'Horn',
          power_level: 150,
          qty: 80,
          deleted_at: null
        },
        {
          id: 9,
          name: 'Flint',
          power_level: 90,
          qty: 25,
          deleted_at: null
        },
        {
          id: 10,
          name: 'Obsidian',
          power_level: 130,
          qty: 100,
          deleted_at: null
        },
        {
          id: 11,
          name: 'Brass',
          power_level: 220,
          qty: 110,
          deleted_at: null
        },
        {
          id: 12,
          name: 'Silver',
          power_level: 300,
          qty: 120,
          deleted_at: null
        }
      ]);
    });
};
