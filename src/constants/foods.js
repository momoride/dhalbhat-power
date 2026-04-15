/**
 * @typedef {Object} Food
 * @property {string} name  - Display name of the dish
 * @property {number} cal   - Calories per standard serving
 * @property {string} emoji - Emoji icon for the dish
 */

/** @type {Food[]} */
export const FOODS = [
  { name: "Dal Bhat",  cal: 650, emoji: "🍛" },
  { name: "Momo",      cal: 450, emoji: "🥟" },
  { name: "Chowmein",  cal: 500, emoji: "🍜" },
  { name: "Egg Curry", cal: 300, emoji: "🥚" },
  { name: "Sel Roti",  cal: 250, emoji: "🥯" },
];

/** Daily calorie target in kcal */
export const DAILY_TARGET = 2200;
