exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('winners', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('icon')
    table.integer('score')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('winners')
}
