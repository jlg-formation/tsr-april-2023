import "./style.css";

import { Board } from "./Board";
import { Config } from "./interfaces/Config";

const board = new Board();
const config: Config = {
  samples: 50,
  multiplicationFactor: 45,
};
board.setConfig(config);
board.clear();
board.draw();
