import {NUMBER_COLUMNS} from '../settings';

const stones = [
  {
    name: "Almazik",
    classN: "almazik",
  },
  {
    name: "Rubinchik",
    classN: "rubinchik",
  },
  {
    name: "Topazik",
    classN: "topazik",
  },
  {
    name: "Izumrudik",
    classN: "izumrudik",
  },
];

export default function stoneGenerator(id) {
  const index = Math.floor(Math.random() * stones.length - 1) + 1;
  const x = id % NUMBER_COLUMNS;
  const y = Math.floor(id / NUMBER_COLUMNS);
  return {
    id, x, y,
    isSelected: false,
    ...stones[index],
  };
}
