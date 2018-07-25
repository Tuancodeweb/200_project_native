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
import LoadingScreen from 'react-loading-screen';
const uuidv1 = require('uuid/v1');
//1
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      searchText:'',
      loading: true,
      editUserStatus : false,
      editUserStatus7 : false,
      UserEditObject : {},
      UserEditObject7 : {},
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

  changeEditUserStatus7 = () => {
    this.setState({
      editUserStatus7 : !this.state.editUserStatus7
    });
    this.props.AlertOn("Hãy dán LINK vừa chia sẻ hoặc copy lại link", "success");
  }
  //4
  EditFuction = (user) => {
    console.log("Đã kết nối rất là okey");
    this.setState({
      UserEditObject:user
    });
    
  

  }

  EditFuction7 = (user) => {
    console.log("Đã kết nối rất là okey");
    this.setState({
      UserEditObject7:user
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

  getUserInfo7 = (info) => {
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
  componentDidMount () {
    // fake promise
    setTimeout(() =>
      this.setState({ loading: false })
    , 8500)
  }
  //9
  render() {
    const { loading } = this.state

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
      <LoadingScreen  loading={loading}  bgColor='#272929' spinnerColor='#272929' textColor='#676767' logoSrc='http://a9.vietbao.vn/images/vn999/150/2017/03/20170318-loat-anh-dong-hinh-hoc-gay-thoi-mien-thach-thuc-con-nguoi-nhat-2.jpg' text='Welcome to MUSICNATIVE'>
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
                        getUserinfoApp7 = {(info) => this.getUserInfo7(info)}

                        ClickButondelete={(idUser) => {this.ClickButondelete(idUser)}}
                        TEST={(user) => this.EditFuction(user)}
                        TEST7={(user) => this.EditFuction7(user)}
                        dataUserprop={ketqua}

                        changeEditUserStatus={() => {this.changeEditUserStatus()}}
                        changeEditUserStatus7={() => {this.changeEditUserStatus7()}}

                        editUserStatus={this.state.editUserStatus} 
                        editUserStatus7={this.state.editUserStatus7} 

                        UserEditObject7={this.state.UserEditObject7}
                        UserEditObject={this.state.UserEditObject}    
                      />
                          <UpMusic Getnewmusicdata={(title,content,link) => this.Getnewmusicdata(title,content,link)}
                                  
                          />
                              <Footer/>
      </div>
         </LoadingScreen>
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
