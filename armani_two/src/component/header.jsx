/**
* @Author: rogerli
* @Date:   2016-09-07T17:28:58+08:00
* @Last modified by:   rogerli
* @Last modified time: 2016-09-25T09:42:13+08:00
*/
import React, {Component} from 'react'
import { connect }  from 'react-redux'
import { Button } from 'antd'
import { ARMANI_APIS } from '../apiConfig/api.config';

class Header extends Component{
   constructor(props){
       super(props);
    }
   render(){
       return (<div className="header_nav">
                 <div className='header_nav_left'>好医生广告系统111sss1111</div>
                 <div className='header_nav_right'>
                     <label>{this.props.name}</label><Button className='primary' size='small'><a href={ARMANI_APIS.weblogin_logout+escape(window.location)}>注销</a></Button>
                 </div>
              </div>);
   }

}
// Header = connect((reducers)=>{
//      return reducers.SysInfo;
// })(Header);
export default Header
