import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import DirectoryReducer from '../redux/directory/directory.reducer';
import shopReducer from '../redux/shop/shop.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Telling redux that I am using localStorage and not sessionStorage for persisiting the particular reducers.
// Persist Config is the config object which sets from where we need to start storing so key is root as rootReducer
// then storage is for type of storage , it can be sessionStorage as well and whitelist is and array of independent
//reducers which will be included in the storage.
const persistConfig = {
    key :'root',
    storage,
    whitelst :['cart']
}

// CombineReducers helps to combine all the small independent reducers to one root reducer
const rootReducer =  combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:DirectoryReducer,
    shop :shopReducer
});

//Persist reducer passes the config and the reducer 
export default persistReducer(persistConfig,rootReducer);