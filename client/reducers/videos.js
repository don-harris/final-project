functionn videos (state=[], action) {
  switch (action.type) {
    case 'RECEIVE_VIDEOS':
    return [...action.videos]
  default:
    return state
  }
}

export default videos