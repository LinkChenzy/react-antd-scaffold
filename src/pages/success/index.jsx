import React from 'react';
import { Icon } from 'antd';
class SuccussPage extends React.Component {
    render() {
        return (
            <div className="container success-box">
                <Icon type="check-circle" theme="outlined" />
                <p>表单提交成功</p>
            </div>
        );
    }
}
export default SuccussPage;