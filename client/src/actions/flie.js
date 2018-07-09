export const READ_FILE = 'READ_FILE'
export const READ_FILE_SUCCESS = 'READ_FILE_SUCCESS'
export const READ_FILE_FAIL = 'READ_FILE_FAIL'

export const readFileSuccess = (data) => {
  return {
    type: READ_FILE_SUCCESS,
    payload: data,
  }
}