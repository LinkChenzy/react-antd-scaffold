const CommonConfig = {
    // 表单宽度设置
    formItemLayout:{
        labelCol: {
            xs: { span: 8 },
            md: { span: 3, offset: 5 }
        },
        wrapperCol: {
            xs: { span: 16 },
            md: { span: 8 }
        }
    },
    formLongLabel: {
        labelCol: {
            xs: { span: 8 },
            md: { span: 5, offset: 3 }
        },
        wrapperCol: {
            xs: { span: 16 },
            md: { span: 8 }
        }
    },
    noLabelLayout:{
        wrapperCol: {
            xs: { span: 24 },
            md: { span: 16, offset: 4 }
        }
    },
    buttonLayout: {
        wrapperCol: {
            xs: { span: 24 },
            md: { span: 8, offset: 8 }
        }
    },
    formItemLayoutWithOutLabelPosition:{
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 8, offset: 8 },
        },
    },
    formItemLayoutWithOutLabel:{
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 8, offset: 8 },
        },
    },
    demandLayout: {
        labelCol: {
            xs: { span: 8 },
            md: { span: 5, offset: 3 }
        },
        wrapperCol: {
            xs: { span: 16 },
            md: { span: 9 }
        }
    },
    rowObject:{
        minRows: 7, maxRows: 10
    },
    LongrowObject: {
        minRows: 4, maxRows: 6
    },
    // 并列的表单
    bingForm:{
        labelCol: {
            xs: { span: 8 },
            md: { span: 5, offset: 1 }
        },
        wrapperCol: {
            xs: { span: 16 },
            md: { span: 18 }
        }
    }
}

module.exports = CommonConfig