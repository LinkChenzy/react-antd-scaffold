// formItems.js
import React from 'react'
import { Input, DatePicker, Radio, Select, Checkbox, Switch } from 'antd';
import Util from 'util/util.jsx'

const { TextArea } = Input
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const Option = Select.Option
const CheckboxGroup = Checkbox.Group
const RangePicker = DatePicker.RangePicker
const _mm = new Util();

const selectExample = (
  <Select>
    <Option value="option1">option1</Option>
    <Option value="option2">option2</Option>
    <Option value="option3">option3</Option>
  </Select>
)
const radioGroupExample = (
  <RadioGroup
    options={[
      { label: 'radio1', value: 'radio1' },
      { label: 'radio2', value: 'radio2' },
      { label: 'radio3', value: 'radio3' },
    ]}
  />
)
const radioButtonGroupExample = (
  <RadioGroup>
    <RadioButton value="radio1">radio1</RadioButton>
    <RadioButton value="radio2">radio2</RadioButton>
    <RadioButton value="radio3">radio3</RadioButton>
  </RadioGroup>
)
const checkboxGroupExample = (
  <CheckboxGroup
    options={[
      { label: 'checkbox1', value: 'checkbox1' },
      { label: 'checkbox2', value: 'checkbox2' },
      { label: 'checkbox3', value: 'checkbox3' },
    ]}
  />
)


export default [
  {
    label: '机构',
    key: 'company',
    required: true,
    placeholder:'机构名称',
    hasFeedback:true,
    rules:[
      _mm.rulesObj.max100,
      _mm.rulesObj.isNum
    ],
    options:{validateTrigger: 'onBlur'}
  },
  {
    label: '密码',
    key: 'password',
    component: <Input type="password" />,
    rules: [
      _mm.rulesObj.password
    ],
  },
  {
    label: '内容',
    key: 'content',
    component: <TextArea />,
    rules:[]
  },
  {
    label: '选择',
    key: 'select',
    required: true,
    component: selectExample,
    rules:[],
    options:{validateTrigger: 'onBlur'}
  },
  {
    label: 'RadioGroup',
    key: 'RadioGroup',
    required: true,
    component: radioGroupExample,
    options: { initialValue: 'radio1' },
    rules:[],
  },
  {
    label: 'RadioButtonGroup',
    key: 'RadioButtonGroup',
    required: true,
    component: radioButtonGroupExample,
    options: { initialValue: 'radio2' },
    rules:[],
  },
  {
    label: 'CheckboxGroup',
    key: 'CheckboxGroup',
    required: true,
    component: checkboxGroupExample,
    options: { initialValue: ['checkbox3'] },
    rules:[],
  },
  {
    label: 'DatePicker',
    key: 'DatePicker',
    required: true,
    component: <DatePicker />,
    rules:[],
  },
  {
    label: 'RangePicker',
    key: 'RangePicker',
    required: true,
    component: <RangePicker />,
    rules:[],
  },
  {
    label: 'Switch',
    key: 'Switch',
    component: <Switch />,
    options: { valuePropName: 'checked', initialValue: false },
    rules:[],
  },
]