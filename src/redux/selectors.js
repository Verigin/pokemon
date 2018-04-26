import { createSelector } from 'reselect'

const filterByNameAndType = function (
  state,
  searchText,
  searchType,
  activePage = 0,
  itemsCountPerPage = 0
) {
  let start = (+activePage - 1) * +itemsCountPerPage
  let end = +start + +itemsCountPerPage
  let arr = state.pokemons.filter(
    item =>
      item.name.includes(searchText) &&
      (searchType === '' || item.types[0].type.name === searchType)
  )
  if (itemsCountPerPage !== 0) {
    arr = arr.slice(start, end)
  }
  return arr
}

export const getPokemonsFilteredByNameAndType = createSelector(
  [filterByNameAndType],
  filterByNameAndType => {
    return filterByNameAndType
  }
)

const pokemonsTypes = function (state) {
  let arr = []
  return state.pokemons
    .filter(item => {
      if (!arr.includes(item.types[0].type.name)) {
        arr.push(item.types[0].type.name)
        return true
      } else return false
    })
    .map(item => item.types[0].type.name)
}

export const getPokemonTypes = createSelector(
  [pokemonsTypes],
  pokemonsTypes => {
    return pokemonsTypes
  }
)
