import axios from 'axios';

export const get = (url, params) => {
    const config = {
        params: {
            ...params,
            api_key: process.env.REACT_APP_API_KEY
        },
      };
    return axios.get(`${process.env.REACT_APP_API}/${url}`, config)
}

export const post = () => {
    
}