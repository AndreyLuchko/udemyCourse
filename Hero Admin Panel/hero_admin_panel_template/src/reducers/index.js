const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
    heroesFiltered: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle',
                heroesFiltered: state.activeFilter === "all" ? action.payload : action.payload.filter(item => item.element === state.activeFilter)
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'DELETE_ITEM':
            const newHeroesList = state.heroes.filter(item => item.id !== action.payload);
            return {
                ...state,
                heroes: newHeroesList,
                heroesFiltered: state.activeFilter === "all" ? newHeroesList : newHeroesList.filter(item => item.element === state.activeFilter)
            }
        case 'ADD_ITEM':
            const newHeroesArr = [...state.heroes, action.payload];
            return {
                ...state,
                heroes: newHeroesArr,
                heroesFiltered: state.activeFilter === "all" ? newHeroesArr : newHeroesArr.filter(item => item.element === state.activeFilter)
            }

        case 'FILTERS_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'FILTER_SELECTED':
            return {
                ...state,
                activeFilter: action.payload,
                heroesFiltered: action.payload === "all" ? state.heroes : state.heroes.filter(item => item.element === action.payload)
            }


        default: return state
    }
}


export default reducer;