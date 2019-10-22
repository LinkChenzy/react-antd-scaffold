import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item;

class Util {
    regPhone = (rule, value, callback) => {
        const reg = /^1[34578]\d{9}$/;
        if (reg.test(value) === false) {
            callback('手机号格式不正确！');
        }
        callback();
    }
    isNum = (rule, value, callback) => {
        const reg = /\d/;
        if (reg.test(value) === false) {
            callback('只能是数字格式！');
        }
        callback();
    }
    // 渲染单个表单项
    renderFormItem = ({ item, layout, getFieldDecorator }) => {
        const { label, key, required, component, options = {}, rules,placeholder,hasFeedback } = item
        return (
        <FormItem key={key} label={label} {...layout} hasFeedback={hasFeedback}>
            {getFieldDecorator(key, {
            ...options,
            rules: [...rules,{ required, message: `${label}不能为空` }],
            })(component || <Input placeholder={placeholder}/>)}
        </FormItem>
        )
    }
    rulesObj = {
        max100:{ max: 100, message: '长度不能超过100' },
        max10:{ max: 10, message: '长度不能超过10' },
        password:{
          required: true,
          pattern: /^[0-9a-zA-Z]{8,16}$/,
          message: '密码长度为8-16位，只能包含数字和英文',
        },
        email:{ type: 'email', message: '邮箱格式不正确'},
        phone:{ validator: this.regPhone },
        isNum:{ validator: this.isNum },
    }
}
export default Util;