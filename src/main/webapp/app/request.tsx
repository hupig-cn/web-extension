// 是否开启网络请求时的页面同步等待效果
import React from 'react';
import axios from 'axios';

// 是否开启网络请求时的页面同步等待效果
const APP_AXIOS_REQUEST_WAIT_VIEW_SHOW = true;

const APP_SERVER_API_URL = 'http://139.196.100.121/yjfapi/web-extension'; // SERVER_API_URL

// 各接口配置
export const Api = {
  tsxExtension: {
    api: '/home.php',
    data: { income: 0, promote: 0, revenue: { freeze: 0, withdrawal: 0, carry: 0, amount: 0 }, recommend: { rc_ing: 0, rc_ed: 0, loss: 0 } },
    loading: APP_AXIOS_REQUEST_WAIT_VIEW_SHOW,
    error: null
  },
  tsxCapital: {
    api: '/capital.php',
    data: { user: null, bankcard: null, profit: null, entrys: null },
    loading: APP_AXIOS_REQUEST_WAIT_VIEW_SHOW,
    error: null
  },
  tsxNotice: {
    api: '/notice.php',
    data: [],
    loading: APP_AXIOS_REQUEST_WAIT_VIEW_SHOW,
    error: null
  }
};
const instance = axios.create({
  // 当创建实例的时候配置默认配置
  xsrfCookieName: 'xsrf-token',
  baseURL: APP_SERVER_API_URL,
  timeout: 5000,
  headers: { 'X-Requested-With': 'foobar' }
});

export const Axios = instance;

export default function requestLoadingWait(props) {
    if (props.loading) {
        return (
            <div style={{
                'opacity': 0.4,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: '50px',
                width: '100vw',
                height: '100vh',
                lineHeight: '100vh',
                backgroundColor: '#FFF',
                textAlign: 'center',
                verticalAlign: 'middle',
                zIndex: 1000
            }} ><div style={{
                height: '90%',
                width: '100%',
                lineHeight: '30px',
                textAlign: 'center'
            }}> <img style={{
                position: 'relative',
                top: '50%',

                backgroundColor: '#e0dddd',
                width: '100px',
                height: '50px',
                padding: '20px 30px',
                borderRadius: '5px'

            }} src="./content/images/loading2.gif" /></div> </div>
        );
    }
    return null;
}
