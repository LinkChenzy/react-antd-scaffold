// MyForm.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form,Button } from 'antd'
import Util from 'util/util.jsx'

const FormItem = Form.Item
const _mm = new Util();
// 默认的layout
const defaultLabelColSpan = 6
const defaultFormItemLayout = {
  labelCol: { span: defaultLabelColSpan },
  wrapperCol: { span: 14 },
}

class MyForm extends Component {
  handleSubmit=()=>{
    this.props.form.validateFields((err, value) =>{
      if(err){
          return;
      }
      console.log(value)
    })
  }
  render() {
    // items格式即为上文配置的表单项
    const { items, layout, form: { getFieldDecorator } } = this.props
    return (
      <Form>
        {items.map(item => _mm.renderFormItem({ item, layout, getFieldDecorator }))}
        {/*提交按钮 */}
        <FormItem className='btn-form'>
            <Button type="primary"
                // disabled={btnState}
                onClick={() => this.handleSubmit()} className='submitBtn' >
                提交按钮
            </Button>
        </FormItem>
      </Form>
    )
  }
}

MyForm.propTypes = {
  items: PropTypes.array.isRequired,
  layout: PropTypes.object,
  form: PropTypes.object.isRequired,
}

MyForm.defaultProps = {
  layout: defaultFormItemLayout,
}

export default Form.create()(MyForm)