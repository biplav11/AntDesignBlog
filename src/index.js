import React from 'react'
import {render} from 'react-dom'
import App from './App'
import 'antd/dist/antd.css';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://5b8971636b7dcb0014d5f3f1.mockapi.io'

render(<App/>, document.getElementById('root'))