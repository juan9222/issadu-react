import { types } from "../types/types";

export const routeReducer = (state = {}, action) => {
    switch (action.type) {
        case types.getRoute:
            return{
                route: action.payload.route
            }    
        default:
            return state
    }
}