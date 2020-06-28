import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'es6-symbol';
import 'browser-polyfill';
import 'babel-polyfill';
import App from './App';
import {HashRouter} from 'react-router-dom'
import { ConfigProvider  } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
ReactDOM.render(
    <HashRouter>
        <ConfigProvider locale={zh_CN}>
            <App />
        </ConfigProvider>
    </HashRouter>, document.getElementById('root'));
//registerServiceWorker();
