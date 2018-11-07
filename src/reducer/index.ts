import { combineReducers } from 'redux'
import fileContent from '../containers/Test/store/Test.reducer'
import home from '../containers/Home/store/Home.reducer'

const rootReducer = combineReducers({
    fileContent,
    home,
})
export default rootReducer
