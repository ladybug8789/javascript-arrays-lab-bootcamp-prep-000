const app = "I don't do much."

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
}

function destructivelyPrependKitten(Bob) {
  window.kittens.unshift(Bob)
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift()
}


//return to this one
function appendKitten(Broom) {
  return appendKitten = [...window.kittens, Broom]
}

function prependKitten(Arnold) {
  return prependKitten = [Arnold, ...window.kittens]
}
