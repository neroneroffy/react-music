import * as Actions from '../actions/flie'
const initialState = {
  name: '',
}
export default function fileContent(state = initialState, action: All) {
  switch (action.type) {
    case Actions.READ_FILE:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.READ_FILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
