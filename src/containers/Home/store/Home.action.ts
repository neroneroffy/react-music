export const GET_HOME_DATA = 'GET_HOME_DATA'
export const GET_HOME_DATA_SUCCESS = 'GET_HOME_DATA_SUCCESS'
export const GET_HOME_DATA_FAILURE = 'GET_HOME_DATA_FAILURE'
export const GET_HOME_DATA_COMPLETE = 'GET_HOME_DATA_COMPLETE'

export const getHomeSuccess = (data: object) => {
    return {
        type: GET_HOME_DATA_SUCCESS,
        payload: data,
    }
}
export const getHomeFailure = () => {
    return {
        type: GET_HOME_DATA_FAILURE,
    }
}

export const getHomeDataAction = (dispatch: any) => {
    console.log('服务端渲染调用')
    return {
        type: GET_HOME_DATA,
    }
}
