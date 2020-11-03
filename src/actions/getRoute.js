import {types} from '../types/types.js'
export const getRoute = (route) => {
    return {
        type: types.getRoute,
        payload: {route}
    }
}