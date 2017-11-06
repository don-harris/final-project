
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('winners').del()
    .then(function () {
      // Inserts seed entries
      return knex('winners').insert([
        {id: 1, name: 'Cliffjumper', icon: '/images/space.png', score: 60},
      ]);
    });
};
