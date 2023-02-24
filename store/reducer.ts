const initialState = {
    loading: null,
    supplier: undefined,
}

export const supplierReducer = (state = initialState, action: any) => {
         switch (action.type) {
        case "getSupplier":
            return {
                ... state,
                supplierData: action.payload,
                loading: false
            }

            default: 
            return state  
        }
}