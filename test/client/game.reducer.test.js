import reducer from '../../client/reducers/game'

test('game reducer works', () => {
    const initialState = []
    const action = {
        type: 'END_ROUND',
        round: [{}]
    }
    const newState = reducer(initialState,action)
    expect(newState.length).toBe(1)
})

test('game reducer ignores unknown action types', () => {
    const initialState = [];
    const action = { type: "UNKNOWN_ACTION_TYPE", round: [{}] };
    const newState = reducer(initialState, action);
    expect(newState).toBe(initialState);
})