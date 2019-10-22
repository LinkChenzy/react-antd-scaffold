// formItems.js
import React from 'react'
import { Input, DatePicker } from 'antd';
import Util from 'util/util.jsx'
import { rowObject } from 'util/formlayout';

const { TextArea } = Input

const _mm = new Util();

export default [
  {
    label: '机构名称',
    key: 'company',
    required: true,
    placeholder:'机构名称',
    hasFeedback:true,
    rules:[
      _mm.rulesObj.max100,
    ],
  },
  {
    label: '成立时间',
    key: 'time',
    required: true,
    hasFeedback:true,
    component: <DatePicker size='large' />,
    rules:[],
  },
  {
    label: '团队人数',
    key: 'number',
    required: true,
    placeholder:'团队人数',
    hasFeedback:true,
    rules:[
      _mm.rulesObj.max100,
      _mm.rulesObj.isNum
    ],
  },
  {
    label: '公司官网',
    key: 'web',
    required: true,
    placeholder:'公司官网',
    hasFeedback:true,
    rules:[
      _mm.rulesObj.max100
    ],
  },
  {
    label: '投资领域',
    key: 'domain',
    required:true,
    placeholder:'投资领域',
    component: <TextArea autoSize={rowObject} placeholder='投资领域'/>,
    rules:[],
  },
  {
    label: '投资理念',
    key: 'idea',
    required:true,
    placeholder:'投资理念',
    component: <TextArea autoSize={rowObject} placeholder='投资理念'/>,
    rules:[],
  },
  {
    label: '联系人姓名',
    key: 'name',
    required: true,
    placeholder:'联系人姓名',
    hasFeedback:true,
    rules:[
      _mm.rulesObj.max100
    ],
  },
  {
    label: '联系人职位',
    key: 'job',
    required: true,
    placeholder:'联系人职位',
    hasFeedback:true,
    rules:[
      _mm.rulesObj.max100
    ],
  },
  {
    label: '联系人邮箱',
    key: 'email',
    required: true,
    placeholder:'联系人邮箱',
    hasFeedback:true,
    rules:[
      _mm.rulesObj.max100,_mm.rulesObj.email
    ],
  },
  {
    label: '联系人手机',
    key: 'phone',
    required: true,
    placeholder:'联系人手机',
    hasFeedback:true,
    rules:[
      _mm.rulesObj.phone
    ],
  },
]