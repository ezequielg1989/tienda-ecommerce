const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    
    switch (action.type) {
        case "ADDITEM":
            //CHECK IF PRODUCT IS ALREADY EXIST 
            const exist = state.find((x)=> x.id === product.id);
            if(exist) { 
                //INCREMENT THE QUANTITY
                return state.map((x)=>
                x.id === product.id ? {...x,qty:x.qty + 1} : x
                );
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }     
                ]
            }
            case "DELITEM":
                const exist1 = state.find((item)=> item.id === product.id);
                if (exist1.qty === 1) {
                    return state.filter((item)=> item.id !== product.id)
                }else {
                    return state.map((item)=>item.id === product.id ? {...item, qty:item.qty-1} : item);
                }
                
                
        default:
            return  state;
            
    }
}


export default handleCart;