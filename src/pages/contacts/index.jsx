import React        from 'react';
import formItems    from './config'
import ContactsForm from './contactsForm'
import { message }  from 'antd'

class Contacts extends React.Component {

    handleSubmit = (value) =>{
        const values = {
            ...value,
            time:value['time'].format('YYYY-MM-DD')
        }
        // 数据提交请求
        // this.axios.post('/cbi',
        //     values
        // ).then((res) => {
            
        // })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="h1-title">表单展示</h1>
                    <ContactsForm  items={formItems} handleMit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default Contacts;
