const cart = [];

//casos a resolver,sumar item y eliminar,con la accion a realizar
const handleCart = (state = cart, action) => {
    const product = action.payload;
    
    switch (action.type) {
        case "ADDITEM":
            //chequeo si el item existe 
            const exist = state.find((x)=> x.id === product.id);
            if(exist) { 
                //incremento el item
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
                //chequeo si el item exite
                const exist1 = state.find((item)=> item.id === product.id);
                //si existe solo un item lo elimino
                if (exist1.qty === 1) {
                    return state.filter((item)=> item.id !== product.id)
                }else {
                //si existe mas de un item del mismo le elimino uno     
                    return state.map((item)=>item.id === product.id ? {...item, qty:item.qty-1} : item);
                }
                
                
        default:
            return  state;
            
    }
}


export default handleCart;