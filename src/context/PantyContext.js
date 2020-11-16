import React, {createContext, useState} from 'react';

export const PantyContext = createContext();

const PantyProvider = (props) => {
    const [pantyObject, storePantyObject] = useState({
        id: null,
        quantity: 0,
        type: null,
        pantyModel: null,
        pantySize: null,
        pantyColor: null,
        pantyPrice: null,
        pantyPriceDiscount: null,
    })
    // useEffect(() => {
    //     localStorage.setItem("Cart",JSON.stringify(pantyObject))
    // }, [storePantyObject,pantyObject])
    return (
            <PantyContext.Provider value={{pantyObject,storePantyObject }}>
                {props.children}
            </PantyContext.Provider>
    )
}

export default PantyProvider;