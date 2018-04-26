import {
  getPakemonList,
  addPakemonToState,
  connectingToApi,
  warningApi,
  errorApi,
  clearState
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
  // console.log('loadPakemonList')
  return function (dispatch) {
    dispatch(clearState())
    dispatch(connectingToApi())
    try {
      getApiData('https://pokeapi.co/api/v2/pokemon/?limit=' + count)
        .then(response => {
          return response.text()
        })
        .then(text => {
          let res = JSON.parse(text)
          if (res.detail !== undefined) {
            dispatch(warningApi(res.detail))
          } else {
            dispatch(getPakemonList())
            let results = JSON.parse(text).results
            results.forEach(element => {
              try {
                getApiData(element.url)
                  .then(response => {
                    return response.text()
                  })
                  .then(text => {
                    let res = JSON.parse(text)
                    if (res.detail !== undefined) {
                      dispatch(warningApi(res.detail))
                    } else {
                      dispatch(addPakemonToState(JSON.parse(text)))
                    }
                  })
              } catch (err) {
                dispatch(errorApi(err))
              }
            })
          }
        })
    } catch (err) {
      dispatch(errorApi(err))
    }
  }
}
