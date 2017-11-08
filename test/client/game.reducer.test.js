import reducer from '../../client/reducers/game'

test('game reducer works', () => {
    const initialState = []
    const action = {
        type: 'END_ROUND',
        round: [{}]
    }
    const newState = reducer(initialState,action)
    console.log('This is newState', newState)
    expect(newState.length).toBe(1)
})