import reducer from '../../client/reducers/players'

test('players reducer works', () => {
    const initialState = []
    const action = {
        type: 'ADD_PLAYERS',
        players: [{},{},{},{}]
    }
    const newState = reducer(initialState,action)
    console.log('This is newState', newState)
    expect(newState.length).toBe(4)
})

test("players reducer ignores unknown action types", () => {
  const initialState = [];
  const action = { type: "UNKNOWN_ACTION_TYPE", round: [{}] };
  const newState = reducer(initialState, action);
  expect(newState).toBe(initialState);
});