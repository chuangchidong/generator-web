import axios from 'axios';

let base = 'http://localhost:8081';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }).then(res => res.data); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }).then(res => res.data); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }).then(res => res.data); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }).then(res => res.data); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }).then(res => res.data); };



export const getMysqlListPage = params => { return axios.get(`${base}/web/mysql/list`, { params: params }).then(res => res.data); };

export const getMysqlGeneCode = params => { 
    let param = "";  
    for(let field in params) {  
      if(params[field]) {  
        param += field + "=" + params[field] + "&";  
      }  
    }  
    param = param.substring(0, param.length-1);  
    let url = `${base}/web/mysql/code?` + param;  
    window.location.href = url;  
    
    // return axios.get(`${base}/web/mysql/code`, { params: params }); 
};