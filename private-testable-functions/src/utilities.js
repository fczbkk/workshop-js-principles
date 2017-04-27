/**
 * Capitalize first letter.
 * @param {string} name
 * @returns {string}
 */
export function sanitizeName (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}