const initialState = {
    itineraries: [],
    itinerariesByCity: [],
    itinerary: {}
}

const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getItineraries':
            return {
                ...state,
                itineraries: action.payload
            }
        case 'getItinerariesByCity':
            return {
                ...state,
                itinerariesByCity: action.payload
            }
        case 'getOneItineraries':
            return {
                ...state,
                itinerary: action.payload
            }
        default:
            return state
    }
}

export default itinerariesReducer