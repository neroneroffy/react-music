export const READ_FILE = 'READ_FILE'
export const READ_FILE_SUCCESS = 'READ_FILE_SUCCESS'
export const READ_FILE_FAIL = 'READ_FILE_FAIL'
export const READ_FILE_COMPLETE = 'READ_FILE_COMPLETE'

export const readFileSuccess = (data: object) => {
  return {
    type: READ_FILE_SUCCESS,
    payload: data,
  }
}
export const readFileFailure = () => {
  return {
    type: READ_FILE_FAIL,
  }
}
export const readFileComplete = () => {
  return {
    type: READ_FILE_COMPLETE,
  }
}
