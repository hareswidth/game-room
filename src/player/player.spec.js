// Unit under test
const makePlayer = require('./player').buildMakePlayer()

// Generators for cases
const makeFakePlayer = (overrides) => {
  const basePlayer = {
    displayName: 'nonmagic name',
    loginDetails: { provider: 'providerName', _id: 'providerStoreId' },
  }
  return { ...basePlayer, ...overrides }
}
const makeBadDisplayNamePlayer = () => makeFakePlayer({ displayName: null })
const makeBadLoginDetailsPlayer = () => makeFakePlayer({ loginDetails: null })

// Test suite
describe('player', () => {
  it('must have a displayName', () => {
    expect(() => makePlayer(makeBadDisplayNamePlayer())).toThrow(
      'Player must have displayName',
    )
  })
  it('must have at least one set of login details', () => {
    expect(() => makePlayer(makeBadLoginDetailsPlayer())).toThrow(
      'Player must have loginDetails',
    )
  })
})
