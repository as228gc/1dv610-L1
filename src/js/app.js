const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö']

/**
 * Encrypts a string by an offset.
 *
 * @param {string} decrypted - The string to be encrypted.
 * @param {number} offset - By which number the character should be offset
 * @returns {string} - The encrypted string
 */
function encryptOffset (decrypted, offset = 2) {
  const encrypted = []
  const lowerCase = decrypted.toLowerCase()
  for (let i = 0; i < lowerCase.length; i++) {
    encrypted[i] = alphabet[alphabet.indexOf(lowerCase[i]) + offset]
  }
  return encrypted.join('')
}
/**
 * Displays the given name with a greeting.
 *
 * @param {string} name - The name to be displayed.
 */
function setNameDisplay (name) {
  const nameDisplay = document.querySelector('#name')
  nameDisplay.innerText = `Hello, ${name}!`
}

const form = document.querySelector('form')
let userInput
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputField = document.getElementById('name-input')
  userInput = inputField.value
  inputField.value = ''
  setNameDisplay(userInput)
  document.querySelector('#toggle').classList.replace('d–none', 'd–block') // Display the button
})

let isToggled = false
const button = document.getElementById('toggle')
button.addEventListener('click', () => {
  if (!isToggled) {
    setNameDisplay(encryptOffset(userInput))
    button.innerText = 'Decrypt name'
  } else {
    setNameDisplay(userInput)
    button.innerText = 'Encrypt name'
  }
  isToggled = !isToggled
})
