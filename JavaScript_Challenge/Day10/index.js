//COMPONENTS
import Header from './components/Header.js';
import PokemonList from './components/PokemonList.js';
import PokemonDetail from './components/PokemonDetail.js';

//APIS
import { getPokemonList, getPokemonDetail } from './modules/api.js';

export default function App($app) {
    this.state = {
        // 필요한 state들에는 무엇이 있는지 생각해보세요!
        type: "", // 포켓몬 타입
        search: "", // 검색 시 기억해야 할 검색어
        id: 1, // 포켓몬 식별에 필요한 아이디 (URL)
    };
}