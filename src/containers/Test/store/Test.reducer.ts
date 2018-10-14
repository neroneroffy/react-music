import * as Actions from './Test.action'
const initialState = {
  name: '',
}
export default function fileContent(state = initialState, action: any) {
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
