import React from 'react';
import './scollTable.less';


export default class EditableTable extends React.Component {
    state = {
        data: [
            {name:'张成',time:'11:35:33',location:'北门',status:'正常'},
            {name:'孙强',time:'11:33:27',location:'#1楼',status:'正常'},
            {name:'张成',time:'11:31:24',location:'南门',status:'正常'},
            {name:'张成',time:'11:27:51',location:'东门',status:'正常'},
            {name:'孙强',time:'11:16:32',location:'#6楼',status:'正常'},
            {name:'孙强',time:'11:10:15',location:'#2楼',status:'正常'},
            {name:'张成',time:'11:04:23',location:'西门',status:'正常'}
        ]
    }
    componentDidMount = () => {
        //文字无缝滚动
        this.industryNews = setInterval(this.taskIndustryNews, 50);
    }
    taskIndustryNews = () => {
        //console.log(this.refs.newDiv)
        if (this.refs.newDiv.scrollTop >= this.refs.newDivUI.offsetHeight - this.refs.newDiv.clientHeight) {
            this.refs.newDiv.scrollTop = 0;
        }
        else {
            this.refs.newDiv.scrollTop += 1;
        }
    }


    handleIndustryNewsEnter = () => {
        clearInterval(this.industryNews);
    }
    handleIndustryNewsLeave = () => {
        this.industryNews = setInterval(this.taskIndustryNews, 50);
    }
    componentWillUnmount = () => {
        clearInterval(this.industryNews);
    }
    render() {
        return (
            <div className='ceShiTable'>
                <div
                    ref='newDiv'
                    className='ceShiTable-body'
                    onMouseEnter={this.handleIndustryNewsEnter.bind(this)}
                    onMouseLeave={this.handleIndustryNewsLeave.bind(this)}
                >
                    <ul ref='newDivUI'>
                        {this.state.data && this.state.data.length > 0
                            ?
                            this.state.data.map(this.tableBody)
                            : <span className='noData'>暂无数据</span>

                        }
                    </ul>
                </div>
            </div>
        );
    }

    tableBody = (item, index) => {
        //console.log(item)
        return (
            <li key={index}>
                <span className='ceShiTable-text2-1'>
                    {item.name}
                </span>
                <span className='ceShiTable-text2-1'>
                    {item.time}
                </span>
                <span className='ceShiTable-text2-1'>
                    {item.location}
                </span>
                <span className='ceShiTable-text2-1'>
                   <span style={{color:item.status === '正常'?'#19de19':'red'}}>{item.status}</span> 
                </span>
            </li>
        );
    }


}
