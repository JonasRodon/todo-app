var entries = require('./list.json')

exports.getListEntries = () => entries

exports.getListEntry = id =>
  entries.find(list => list.id === +id)
