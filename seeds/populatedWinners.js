
exports.seed = function (knex, Promise) {
  return knex('winners').del()
    .then(function () {
      return knex('winners').insert([
        {id: 1, name: 'Rocky', icon: '/images/rocky.png', score: 60},
        {id: 2, name: 'MEgaTron', icon: '/images/batman.png', score: 58},
        {id: 3, name: 'PearlJam', icon: '/images/runlolarun.png', score: 56}
      ])
    })
};
