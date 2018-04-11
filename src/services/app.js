import request from '../utils/request'

export const login = values => {
    return request.post('/login', values)
}

export const requestFilterList = values => {
    return request.post('/filter', values)
}

