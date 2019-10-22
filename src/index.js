import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios 			   from './lib/axios';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';

moment.locale('zh-cn');
// 定义全局方法axios
React.Component.prototype.axios = axios

// 保持js修改热更新
if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render( <App /> ,
            document.getElementById('root')
        )
    })
}
const AppCont = <ConfigProvider locale={zhCN} ><App /></ConfigProvider>
ReactDOM.render(AppCont, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
