const random = () => Math.floor(255 * Math.random());

export default function randomizeBgColor() {
  return `rgb(${random()}, ${random()}, ${random()})`;
}
