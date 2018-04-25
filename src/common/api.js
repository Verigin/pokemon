import { getPakemonList, addPakemonToState } from '../redux/actions'

function getApiData(url) {
  let headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    };
  return fetch(url, {
    method: 'GET',
    headers: headers,
    responseType: 'json',
    withCredentials: true,
    follow: 0
  })
}

// async function getPakemon(url, dispatch) {
//   await getApiData(url)
//       .then(response => {
//         return response.text();
//       })
//       .then(text => {
//         dispatch(addPakemonToState(JSON.parse(text)))
//       });
// }

export function loadPakemonList(count) {
  console.log('loadPakemonList')
  return function(dispatch) {
    getApiData('https://pokeapi.co/api/v2/pokemon/?limit='+count)
    .then(response => {
      return response.text();
    })
    .then(text => {
    //dispatch(getPakemonList(JSON.parse(text).results))
    let res = JSON.parse(text).results;
    console.log(res)

    res.forEach(element => {
      getApiData(element.url)
      .then(response => {
        return response.text();
      })
      .then(text => {
        dispatch(addPakemonToState(JSON.parse(text)))
      });
    })  

    //console.log(arr)

    })
  }
}