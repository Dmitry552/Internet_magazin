export var setFilter = filter => ({
  type: 'SET_FILTER',
  payload: filter
});

export var setSearchQuery = value => ({
  type: 'SET_QUERY',
  payload: value
});