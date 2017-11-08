import { addAllPlayers } from '../../client/actions/players'
import { findCurrentPlayer } from "../../client/actions/currentplayer";
import { setPlayerScores } from "../../client/actions/playerScores";
import {
  startRound,
  nextPlayer,
  endRound,
  resetGame
} from "../../client/actions/round";
import { nextVideo } from "../../client/actions/videoChanger";
import { receiveVideos } from "../../client/actions/videos";

test('addAllPlayers has correct type', () => {
    const action = addAllPlayers('joe')
    expect(action.type).toBe("ADD_PLAYERS")
    expect(action.players).toBe('joe')
})

test("findCurrentPlayer has correct type", () => {
  const action = findCurrentPlayer("joe");
  expect(action.type).toBe("FIND_CURRENT_PLAYER")
  expect(action.players).toBe("joe");
});

test("startRound has correct type", () => {
  const action = startRound();
  expect(action.type).toBe("START_ROUND");
});

test("endRound has correct type", () => {
  const action = endRound();
  expect(action.type).toBe("END_ROUND");
});

test("resetGame has correct type", () => {
  const action = resetGame();
  expect(action.type).toBe("RESET_GAME");
});

test("nextVideo has correct type", () => {
  const action = nextVideo();
  expect(action.type).toBe("NEXT_VIDEO");
});

test("receiveVideos has correct type", () => {
  const action = receiveVideos();
  expect(action.type).toBe("RECEIVE_VIDEOS");
});


