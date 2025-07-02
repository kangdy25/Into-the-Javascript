// 미션1. API 호출1

// 아래와 같은 fakeApiCall 함수가 있습니다. 이 함수는 2초 후에 사용자 정보를 반환합니다.
// async와 await를 사용하여 이 API 호출을 기다리고, 사용자 이름을 콘솔에 출력하는 fetchUserData 함수를 작성하세요.

function fakeApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'John Doe', age: 30 });
        }, 2000);
    });
}

// fetchUserData 함수 완성
const fetchUserData = async () => {
    try {
        let res = await fakeApiCall();
        console.log(res.name)
    } catch (e) {
        console.error(e)
    }
}

fetchUserData();

// 미션2. API 호출2

// 아래의 API 주소는 포켓몬들의 정보가 담겨있는 data를 반환합니다. 주어진 API 주소를 사용해, 아래의 조건을 모두 만족하는 코드를 작성하세요.

const API_URL = 'https://pokemon-api-ecru-eta.vercel.app';

const PokemonApiCall = async () => {
    try {
        let response = await fetch(API_URL)
        let data = await response.json();
        let pokemonArr = data.data

        let greenPokemon = pokemonArr.filter(pokemon => pokemon.color === "green");
        console.log(greenPokemon)
    } catch(e) {
        console.error(e)
    }
}

PokemonApiCall();