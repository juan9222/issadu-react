import { types } from "../types/types";

const initialState = {
    onePiecePrice: 0
}

export const onePiecePriceReducer = (state = initialState, action) => {
        switch (action.type) {
            case types.getOnePiecePrice:
                return{
                    onePiecePrice: action.payload.onePiecePrice
                }    
            default:
                return state
        }
}


// import { types } from "../types/types";

// export const onePieceReducer = (state = {}, action) => {
//     console.log(types)
//     switch (action.type) {
//         case types.getRoute:
//             return{
//                 route: action.payload.route
//             }
//         case types.setOnePieces:
//             return{
//                 onePiece: action.payload.onePiece
//             }
//         case types.setOnePieceModel:
//             return{
//                 onePieceModel: action.payload.onePieceModel
//             }
//         case types.setOnePieceColor:
//             return{
//                 onePieceColor: action.payload.onePieceColor
//             }
//         case types.setSizeModel:
//             return{
//                 sizeModel: action.payload.sizeModel
//             }
//         case types.setOnePiecePrice:
//             return{
//                 onePiecePrice: action.payload.onePiecePrice
//             }
//         case types.setOnePieceDiscountedPrice:
//             return{
//                 onePieceDiscountedPrice: action.payload.onePieceDiscountedPrice
//             }
//         default:
//             return state
//     }
// }

