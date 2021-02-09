import React, {createContext, useState} from 'react';

export const OnePieceContext = createContext();

const OnePieceProvider = (props) => {
    const [onePieceObject, storeOnePieceObject] = useState({
        id: null,
        quantity: 0,
        type: null,
        onePieceModel: null,
        onePieceSize: null,
        onePieceColor: null,
        onePiecePrice: null,
        onePiecePriceDiscount: null,
    })
    return (
            <OnePieceContext.Provider value={{onePieceObject,storeOnePieceObject }}>
                {props.children}
            </OnePieceContext.Provider>
    )
}

export default OnePieceProvider;