const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö']

/**
 * Encrypts a string by an offset.
 *
 * @param {string} decrypted - The string to be encrypted.
 * @param {number} offset - By which number the character should be offset
 * @returns {string} - The encrypted string
 */
function encrypt (decrypted, offset = 2) {
  const encrypted = []
  const lowerCase = decrypted.toLowerCase()
  for (let i = 0; i < lowerCase.length; i++) {
    console.log(alphabet.indexOf(lowerCase[i]))
    encrypted[i] = alphabet[alphabet.indexOf(lowerCase[i]) + offset]
  }
  return encrypted.join('')
}

const userInput = prompt('Enter your name')
document.getElementById('name').innerText = userInput
let isToggled = false
const button = document.getElementById('toggle')
button.addEventListener('click', () => {
  const nameDisplay = document.getElementById('name')
  if (!isToggled) {
    nameDisplay.innerText = encrypt(userInput)
    button.innerText = 'Decrypt name'
  } else {
    nameDisplay.innerText = userInput
    button.innerText = 'Encrypt name'
  }
  isToggled = !isToggled
  console.log(isToggled)
  console.log(encrypt(userInput))
})
