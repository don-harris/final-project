exports.seed = function (knex, Promise) {
  return knex('videos').del()
    .then(() => {
      return knex('videos').insert([
        {id: 1, vid_url: 'https://www.youtube.com/watch?v=VQNoPqLuZ74', quote: 'you have a breathtaking hiney'},
        {id: 2, vid_url: 'https://www.youtube.com/watch?v=VWb1z6ZwUoY', quote: 'we came we saw we kicked its ass'},
        {id: 3, vid_url: 'https://youtu.be/Coemj2qdWMw?t=5', quote: 'happy people just dont shoot their husbands'},
        {id: 4, vid_url: 'https://youtu.be/pEOVNmSR7_c?t=65', quote: 'yippee ki yay motherfucker'},
        {id: 5, vid_url: 'https://www.youtube.com/watch?v=1YGfrGKK9Mo', quote: 'Im flying jack'},
        {id: 6, vid_url: 'https://youtu.be/TU7CDejp6Lw?t=80', quote: 'get to the chopper'}
      ])
    })
}
