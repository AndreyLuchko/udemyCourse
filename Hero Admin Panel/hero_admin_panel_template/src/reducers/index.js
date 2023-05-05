const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
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
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload)
            }
        case 'ADD_ITEM':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
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
            }


        default: return state
    }
}


export default reducer;