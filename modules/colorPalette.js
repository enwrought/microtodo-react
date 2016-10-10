/* eslint-disable no-param-reassign */
export const COLORS = {
  greenSea: '#16a085',
  emerald: '#2ecc71',
  peterRiver: '#3498db',
  wisteria: '#8e44ad',
  wetAsphalt: '#34495e',
  sunflower: '#f1c40f',
  carrot: '#e67e22',
  pomegranate: '#c0392b',
  concrete: '#95a5a6'
};

const color_names = Object.keys(COLORS);
const num_colors = color_names.length;

export function colorPalette(target) {
  target.currentColorIndex = 0;

  /**
   * Returns the next color as a hex string '#@@@@@@'
  **/
  target.getNextColor = () => {
    const nextColor = COLORS[color_names[target.currentColorIndex]];
    target.currentColorIndex = (target.currentColorIndex + 1) % num_colors;
    return nextColor;
  };
}
