const ProductReducer=(state,action)=>{

    switch(action.type){
        case 'SET_LOADING':
            return {...state, 
                    isLoading:true
                };

        case 'SET_API_DATA':

            let featureData = action.payload.filter((elem)=>{
               return elem.featured === true;
            })
            
            console.log(featureData)

            return {...state,
                isLoading:false,
                products:action.payload,
                featureProducts:featureData
                }

        case 'API_ERROR':
            return {...state,
                 isLoading:false,
                 isError:true
                };

        default:
            return state;
    }

}

export default ProductReducer;