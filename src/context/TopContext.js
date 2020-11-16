import React, {createContext, useState} from 'react';

export const TopContext = createContext();

const TopProvider = (props) => {
    const [topObject, storeTopObject] = useState({
        id: null,
        quantity: 0,
        type: null,
        topModel: null,
        topSize: null,
        topColor: null,
        topPrice: null,
        topPriceDiscount: null,
    })
    // useEffect(() => {
    //     localStorage.setItem("Cart",JSON.stringify(topObject))
    // }, [storeTopObject,topObject])
    return (
            <TopContext.Provider value={{topObject,storeTopObject }}>
                {props.children}
            </TopContext.Provider>
    )
}

export default TopProvider;