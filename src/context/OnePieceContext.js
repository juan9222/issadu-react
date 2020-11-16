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
    // useEffect(() => {
    //     localStorage.setItem("Cart",JSON.stringify(onePieceObject))
    // }, [storeOnePieceObject,onePieceObject])
    return (
            <OnePieceContext.Provider value={{onePieceObject,storeOnePieceObject }}>
                {props.children}
            </OnePieceContext.Provider>
    )
}

export default OnePieceProvider;