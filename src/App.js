import React, { Component } from 'react';
import Navlogo from './component/Navlogo';
import Header from './component/Header';
import Search from './component/Search';
import Content from './component/Content';
import UpMusic from './component/UpMusic';
import Footer from './component/Footer';
import Datamusic from './component/DATA.json';
import {connect} from 'react-redux';
import AlertInfo from './component/AlertInfo';
const uuidv1 = require('uuid/v1');
//1
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      searchText:'',
      editUserStatus : false,
      UserEditObject : {}
    }
  }
 //2
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
  }
//3
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
    this.props.AlertOn("bạn đang tiến hành sửa bài hát", "success");
  }
  //4
  EditFuction = (user) => {
    console.log("Đã kết nối rất là okey");
    this.setState({
      UserEditObject:user
    });
    

  }
//5
  getUserInfo = (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id)
      {
        value.title = info.title;
        value.content = info.content;
        value.link = info.link;
      }
    })
  }
  //6
  Getnewmusicdata = (title,content,link) => {
      var item = {}
      item.id = uuidv1();
      item.title = title;
      item.content = content;
      item.link = link;
     
      var items = this.state.data;
      items.push(item);
      this.setState({
        data : items
      });
      localStorage.setItem("userData",JSON.stringify(items));    

     
      this.props.AlertOn("thêm mới "  + item.title  + "  thành công" , "success");
  }
  //7
  ClickButondelete = (idUser) => {
    var tempdata = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data:tempdata
    });
    localStorage.setItem("userData",JSON.stringify(tempdata))
    
    this.props.AlertOn("xóa bài hát thành công " ,  "danger");
  }
  //8
  componentWillMount() {
    if(localStorage.getItem("userData")=== null)
    {
      localStorage.setItem("userData",JSON.stringify(Datamusic));
    }
    else{
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data:temp
      })
      
    }
  }
  //9
  render() {
    var ketqua = [];
    this.state.data.forEach((item) =>{
      if(item.title.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
      else
      {
        return(
          <div>
          {this.props.AlertOn("xin lỗi không phát hiện bài hát trong hệ thống " ,  "danger")}
          </div>
        )
      }
    });
    return (
      <div>
      <AlertInfo/>
          <Navlogo/>
              <Header/>
                  <Search
                    Checkconnect = {(dl) => this.getTextSearch(dl)}
                    getUserinfoApp = {(info) => this.getUserInfo(info)}

                  />
                      <Content
                         getUserinfoApp = {(info) => this.getUserInfo(info)}
                        ClickButondelete={(idUser) => {this.ClickButondelete(idUser)}}
                        TEST={(user) => this.EditFuction(user)}
                        dataUserprop={ketqua}
                        changeEditUserStatus={() => {this.changeEditUserStatus()}}
                        editUserStatus={this.state.editUserStatus} 
                        UserEditObject={this.state.UserEditObject}  
                      />
                          <UpMusic Getnewmusicdata={(title,content,link) => this.Getnewmusicdata(title,content,link)}
                                  
                          />
                              <Footer/>

      </div>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertContent: state.AlertContent,
        AlertStyle : state.AlertStyle
    }
}
// sử dụng : muốn thay đổi thuộc tính ở store mà đang ở 1 component lạ thì dùng mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      AlertOn: (AlertContent , AlertStyle) => {
        dispatch({
          type:"ALERT_ON",
          AlertContent,
          AlertStyle
        })
      },
      AlertOff: () => {
        dispatch({
          type:"ALERT_OFF"
        })
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
