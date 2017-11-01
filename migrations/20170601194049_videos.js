exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('videos', (table) => {
    table.increments('id').primary()
    table.string('vid_url')
    table.string('quote')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('videos')
}
