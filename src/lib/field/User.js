// @todo option to allow multiple entries
// @todo option to allow duplicates
export class User {
  constructor (def = {}) {
    this.merge(def)
  }

  merge ({ presetWithAuthenticated, selectType, multiDelimiter } = {}) {
    this.presetWithAuthenticated = this.presetWithAuthenticated || !!presetWithAuthenticated
    this.selectType = selectType ? (typeof selectType === 'string' ? selectType : 'default') : 'default'
    this.multiDelimiter = multiDelimiter ? (typeof multiDelimiter === 'string' ? multiDelimiter : '\n') : this.multiDelimiter

    return this
  }

  formatter ({ userID, name, username, email } = {}) {
    return name || username || email || userID
  }

  export () {
    return {
      presetWithAuthenticated: this.presetWithAuthenticated,
      selectType: this.selectType,
    }
  }
}
