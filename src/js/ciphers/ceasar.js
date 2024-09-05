const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö']

/**
 * Encrypts a string by an offset.
 *
 * @param {string} decrypted - The string to be encrypted.
 * @param {number} offset - By which number the character should be offset
 * @returns {string} - The encrypted string
 */
export function ceasarCipher (decrypted, offset = 2) {
  const encrypted = []
  const lowerCase = decrypted.toLowerCase()
  for (let i = 0; i < lowerCase.length; i++) {
    encrypted[i] = alphabet[alphabet.indexOf(lowerCase[i]) + offset]
  }
  return encrypted.join('')
}
