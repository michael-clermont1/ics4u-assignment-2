/**
 * The program gets the max run
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-12
 */

import promptSync from 'prompt-sync'

/**
 * The function calculates the max run of a string
 *
 * @param {string} userWord  - String variable
 * @returns {number} Return value
 */
function maxRunCalculator (userWord: string): number {
  let maxRun = 1
  let tempValue = 1
  for (let counter = 0; counter < userWord.length; counter++) {
    if (userWord.charAt(counter) === userWord.charAt(counter + 1)) {
      tempValue += 1
    } else {
      if (tempValue > maxRun) {
        maxRun = tempValue
        tempValue = 1
      }
    }
  }
  if (tempValue > maxRun) {
    maxRun = tempValue
    tempValue = 1
  }
  return maxRun
}

const prompt = promptSync()
const userString = prompt('Enter a string: ')
const maxRunValue = maxRunCalculator(userString)
console.log(`The max amount of values in a row is ${maxRunValue}`)

console.log('\nDone.')
