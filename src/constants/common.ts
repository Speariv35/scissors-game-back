/**
 * Its our variation of game added well
 */
export enum GameAvailableOptions {
  'scissors' = 'scissors',
  'rock' = 'rock',
  'paper' = 'paper',
  'well' = 'well',
}

/**
 * Participants of the game
 */
export enum Participants {
  'user' = 'user',
  'opponent' = 'opponent',
}

/**
 * Losers map
 * (scissors cut paper, but sink in well, breaking by rock)
 * (rock breaking scissors, but sink in well, and cover by paper)
 * (paper cover well and rock, but cut by scissors)
 * (In well sink all, instead of paper)
 */
export const losersMap = {
  [GameAvailableOptions.scissors]: [GameAvailableOptions.paper],
  [GameAvailableOptions.rock]: [GameAvailableOptions.scissors],
  [GameAvailableOptions.paper]: [
    GameAvailableOptions.well,
    GameAvailableOptions.rock,
  ],
  [GameAvailableOptions.well]: [
    GameAvailableOptions.rock,
    GameAvailableOptions.scissors,
  ],
};
