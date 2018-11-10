import * as Actions from './Home.action'
const initialState = {
    homeData: '',
}
export default function home(state = initialState, action: any) {
    switch (action.type) {
        case Actions.GET_HOME_DATA_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        case Actions.GET_HOME_DATA_FAILURE:
            return {
                ...state,
                homeData: 'failure',
            }
        default:
            return state
    }
}
