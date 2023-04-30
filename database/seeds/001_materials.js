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
          base_power: 100,
          qty: 50,
          deleted_at: null
        },
        {
          id: 2,
          name: 'Steel',
          base_power: 20,
          qty: 1,
          deleted_at: null
        },
        {
          id: 3,
          name: 'Bronze',
          base_power: 60,
          qty: 120,
          deleted_at: null
        },
        {
          id: 4,
          name: 'Copper',
          base_power: 10,
          qty: 70,
          deleted_at: null
        },
        {
          id: 5,
          name: 'Wood',
          base_power: 30,
          qty: 30,
          deleted_at: null
        },
        {
          id: 6,
          name: 'Leather',
          base_power: 80,
          qty: 45,
          deleted_at: null
        },
        {
          id: 7,
          name: 'Bone',
          base_power: 50,
          qty: 150,
          deleted_at: null
        },
        {
          id: 8,
          name: 'Horn',
          base_power: 150,
          qty: 80,
          deleted_at: null
        },
        {
          id: 9,
          name: 'Flint',
          base_power: 90,
          qty: 25,
          deleted_at: null
        },
        {
          id: 10,
          name: 'Obsidian',
          base_power: 130,
          qty: 100,
          deleted_at: null
        },
        {
          id: 11,
          name: 'Brass',
          base_power: 220,
          qty: 110,
          deleted_at: null
        },
        {
          id: 12,
          name: 'Silver',
          base_power: 300,
          qty: 120,
          deleted_at: null
        }
      ]);
    });
};
