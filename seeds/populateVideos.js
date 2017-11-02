exports.seed = function (knex, Promise) {
  return knex('videos').del()
    .then(() => {
      return knex('videos').insert([
        {id: 1, vid_url: 'VQNoPqLuZ74', quote: 'you have a breathtaking hiney'},
        {id: 2, vid_url: 'VWb1z6ZwUoY', quote: 'we came we saw we kicked its ass'},
        {id: 3, vid_url: 'Coemj2qdWMw', quote: 'happy people just dont shoot their husbands'},
        {id: 4, vid_url: 'pEOVNmSR7_c', quote: 'yippee ki yay motherfucker'},
        {id: 5, vid_url: '1YGfrGKK9Mo', quote: 'Im flying jack'},
        {id: 6, vid_url: 'TU7CDejp6Lw', quote: 'get to the chopper'}
      ])
    })
}

