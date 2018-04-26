import {
  getPakemonList,
  addPakemonToState,
  connectingToApi
} from '../redux/actions'

function getApiData (url) {
  let headers = {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
  return fetch(url, {
    method: 'GET',
    headers: headers,
    responseType: 'json',
    withCredentials: true,
    follow: 0
  })
}

export function loadPakemonList (count) {
  console.log('loadPakemonList')
  return function (dispatch) {
    dispatch(connectingToApi())
    getApiData('https://pokeapi.co/api/v2/pokemon/?limit=' + count)
      .then(response => {
        return response.text()
      })
      .then(text => {
        let res = JSON.parse(text).results
        console.log(res)
        dispatch(getPakemonList())
        res.forEach(element => {
          getApiData(element.url)
            .then(response => {
              return response.text()
            })
            .then(text => {
              dispatch(addPakemonToState(JSON.parse(text)))
            })
        })
      })
  }
}
