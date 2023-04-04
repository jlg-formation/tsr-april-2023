import "./style.scss";

import { Board } from "./Board";
import { Config } from "./interfaces/Config";
import { Command } from "./Command";

const board = new Board();
const config: Config = {
  samples: 32,
  multiplicationFactor: 17,
};
board.setConfig(config);
board.clear();
board.draw();

const command = new Command();
command.setConfig(config);
command.onChange((newConfig) => {
  board.setConfig(newConfig);
  board.clear();
  board.draw();
});
