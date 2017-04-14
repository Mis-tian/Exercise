import React, { Component } from 'react';
import { render,findDOMNode,unstable_renderSubtreeIntoContainer,unmountComponentAtNode } from 'react-dom';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import TestUtils from 'react-dom/test-utils';
import Header from '../../component/header';
import Mock from 'mockjs';
import {SYS_APIS} from '../../apiConfig/api.config';
import { Button,message } from 'antd';
import Ajax from '../../mock_api_test/ajax';

// console.log('Ajax',Ajax)
// console.log(message)
// console.log(SYS_APIS);
// console.log('Mock',Mock)
class A extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {v:1,z:2}
    this.info = this.info.bind(this);
  }
  componentDidMount() {
      console.log('',SYS_APIS)
      // message.error('111')
      // 使用 Mock\
      // Mock.mock( rurl, rtype, template )
     Ajax({
        url:SYS_APIS.planListByPage,
        type:'get',
        data:{
          pageNo:1,
          pageSize:20,
          adType:-1,
          putTypeL:-1
        },
        succcess(data){
          console.log('data',data)
        },
        error(error){

        }
      });
      var data = Mock.mock(`${SYS_APIS.planListByPage}?pageNo=1&pageSize=20&adType=-1&putType=-1`,'get',{
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          'list|1-10': [{
              // 属性 id 是一个自增数，起始值为 1，每次增 1
              'id|+1': 1
          }]
      })
      // 
      Mock.setup({
          timeout: '200-600' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
      });
           
      // Mock.XHR.prototype.open('get',`${SYS_APIS.planListByPage}?pageNo=1&pageSize=20&adType=-1&putType=-1`,);
      // Mock.XHR.prototype.send();
      // method, url, async, username, password
      // console.log('Mock',Mock)
      // console.log('Mock.xhr',Mock.XHR.open)
      console.log('=========sdfffdfff======111===',JSON.stringify(data, null, 4))    

  }
  info() {
    // message.info('This is a normal message');
    window.location.href = '';
  }     
  render() {
    let data ={
      name:'xietian'
    }
    console.log(this.state,1111+'1d3333d')
    return (
      <div>
        <Header {...data}/>
      </div>
    );
  }
}

export default A;