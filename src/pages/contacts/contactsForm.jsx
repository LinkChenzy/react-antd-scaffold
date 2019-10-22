// MyForm.js
import React, { Component }     from 'react'
import PropTypes                from 'prop-types'
import { Form,Button }          from 'antd'
import Util                     from 'util/util.jsx'
import { formItemLayout,buttonLayout } from 'util/formlayout';

const FormItem = Form.Item
const _mm = new Util();

class ContactsForm extends Component {
    handleSubmit=()=>{
        const _this = this;
        // 验证表单
        this.props.form.validateFields((err, value) =>{
            if(err){
                return;
            }
            // 使用父组件的方法
            _this.props.handleMit(value)
        })
    }
    render() {
        // items格式即为上文配置的表单项
        const { items, layout, form: { getFieldDecorator } } = this.props
        return (
        <Form>
            {items.map(item => _mm.renderFormItem({ item, layout, getFieldDecorator }))}
            <FormItem className='btn-form' {...buttonLayout}>
                <Button type="primary"
                    onClick={() => this.handleSubmit()} className='submitBtn' >
                    提交表单
                </Button>
            </FormItem>
        </Form>
        )
    }
}

ContactsForm.propTypes = {
  items: PropTypes.array.isRequired,
  layout: PropTypes.object,
  form: PropTypes.object.isRequired,
}

ContactsForm.defaultProps = {
  layout: formItemLayout,
}

export default Form.create()(ContactsForm)