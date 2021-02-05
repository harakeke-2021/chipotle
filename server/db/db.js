const matches = []

module.exports = {
  addMatch
}

function addMatch (match) {
  matches.push(match)
  return Promise.resolve(1)
}
