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
