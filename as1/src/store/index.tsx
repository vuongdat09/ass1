import { productReducer } from '@/Reducer/products';
import { legacy_createStore as createStore, combineReducers} from 'redux'

const rootReducer = combineReducers({
    products: productReducer
})
const store = createStore(rootReducer as any)

export default store;