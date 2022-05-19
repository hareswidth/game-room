module.exports = {
  buildMakePlayer: () => {
    const makePlayer = ({ displayName, loginDetails }) => {
      if (!displayName || displayName.trim().length == 0) {
        throw new Error('Player must have displayName')
      }

      // Login details should at least look like
      // const loginDetails = { frozenUserObject }
      // const frozenUserObject = { getProvider: 'google_oauth20', _id: '[some hash]' }
      if (
        !loginDetails ||
        Object.keys(loginDetails).length === 0 ||
        Object.getPrototypeOf(obj) === Object.prototype
      ) {
        throw new Error('Player must have loginDetails')
      }

      return Object.freeze({
        getDisplayName: () => displayName.trim(),
        getLoginDetails: () => loginDetails,
      })
    }
    return makePlayer
  },
}
