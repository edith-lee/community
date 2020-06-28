import axios from 'axios'
import { message } from 'antd'
export const Http = (method, url, data) => {
    let loading
    loading = document.getElementById('ajaxLoading')
    loading.style.display = 'block'
    let token = sessionStorage.getItem('token')
    if (!token || token === undefined || token === "") {
        loading = document.getElementById('ajaxLoading')
        loading.style.display = 'none'
        message.warn('登录状态超时，请重新登录');
        window.location.href = "#/";
    }
    return new Promise((resolve, reject) => {
        //console.log(JSON.stringify(data))
        let apiData = {}
        if (method === 'GET' || method === "DELETE") {
            apiData = {
                params: data
            }
        } else {
            apiData = {
                data: data
            }
        }
        axios({
            method: method,
            headers: {
                "pragma": "no-cache",
                'Content-type': 'application/json;charset=UTF-8',
                'Authorization': token
            },
            url: url,
            ...apiData,
            timeout: 10000,
        }).then((res) => {
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'none'
            if (res && res.status == '200' && res.data.success == 1) {
                resolve(res.data)
            } else {
                if (res.data.type == '401') {
                    message.warn('登录状态超时，请重新登录');
                    window.location.href = "#/";
                } else {
                    message.warn(res.data.msg)
                    reject(res.msg)
                }

            }
        }).catch((err) => {
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'none'
            message.warn('系统问题，请联系管理人员')
        })
    })
}
