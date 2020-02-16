import * as types from './actionTypes';

export const loadProducts = () =>{
    return{
        type: types.PRODUCTS_LOAD_SUCCESS,
        payload: [],
        meta: {
            offline: {
                //effect: {url: 'https://api.myjson.com/bins/dap2o', method: 'GET'},
                effect: {url: 'https://api.myjson.com/bins/zwai4', method: 'GET'},
                commit: {type: types.PRODUCT_LOAD_COMMIT}
        }
    }
}
};

export const markFavourite = (productId)=>{
    return{
        type: types.MARK_FAOURITE,
        payload: {productId: productId}
    }
}

export const unMarkFavourite = (productId)=>{
    return{
        type: types.UNMARK_FAOURITE,
        payload: {productId: productId}
    }
}

export function addProduct (prodObj){
    return{
        type: types.ADD_PRODUCT,
        payload: prodObj
    }
}

// export function productsLoaded(products) {
//     return {
//         type: types.PRODUCTS_LOAD_SUCCESS, products
//     };
// };

// //With Fetch
// export function getProducts() {
//     return function (dispatch) {
//         fetch('https://api.myjson.com/bins/dap2o')
//             .then(response => response.json())
//             .then(json => {
//                 let list = json;
//                 dispatch(productsLoaded(list));
//             })
//             .catch((error)=>{
//                 console.log("Error occurred", error)
//             });
//     }
// };

// //With Axios
// export function getProductsAxios() {
//     return function (dispatch) {
//         axios.get('https://api.myjson.com/bins/dap2o')
//             // .then(response => response.json())
//             .then(response => {
//                 let list = response.data;
//                 dispatch(productsLoaded(list));
//             })
//             .catch((error)=>{
//                 console.log("Error occurred", error)
//             });
//     }
// };
