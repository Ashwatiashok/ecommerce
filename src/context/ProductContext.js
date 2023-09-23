import react, {createContext,useContext, useEffect, useReducer} from 'react';
import axios from 'axios';
import reducer from '../reducer/ProductReducer';

export let AppContext = createContext();

let API='https://api.pujakaitem.com/api/products';

let initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[]
}

let ProductContext=({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState);

    let getProducts= async (url)=>{

        dispatch({type:'SET_LOADING'})
        
        try{
            
            const res = await axios.get(url);
            const products = await res.data;
            console.log(products);
            dispatch({type:'SET_API_DATA', payload:products})

        }catch(error){

            dispatch({type:'API_ERROR'})
        }
    }
    
    useEffect(()=>{

        getProducts(API)

    },[])
    
    
    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}


export default ProductContext;

export let useProductContext=()=>{
    return useContext(AppContext);
}
