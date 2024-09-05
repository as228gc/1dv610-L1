const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö']

/**
 * Encrypts a string with the atbash cipher.
 *
 * @param {string} name - The name to be encrypted.
 * @returns {string} - The encrypted string.
 */
export function atbashCipher (name) {
  const encrypted = []
  const lowerCase = name.toLowerCase()
  for (const character of lowerCase) {
    encrypted.push(alphabet[(alphabet.length - 1) - (alphabet.indexOf(character))])
  }
  return encrypted.join('')
}
