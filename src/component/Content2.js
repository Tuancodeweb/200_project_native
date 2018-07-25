import React, { Component } from 'react';
import EditMusic from './EditMusic';
import ShareMS from './ShareMS'
class Content2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempvalue:'',
      UserInfo:{}
    }
  }
  getUserInfo = (info) => {
    this.setState({
        UserInfo : info
    });
    this.props.getUserinfoApp2(info);

    
}
  isShowForm = () => {
    if(this.props.editUserStatus === true)
    {
        return (<EditMusic
          getUserinfoApp3={(info) => {this.props.getUserinfoApp2(info)}}
            UserEditObject={this.props.UserEditObject} 
            changeEditUserStatus={() => {this.props.changeEditUserStatus()}}
            />);
    }
}

isShowForm2 = () => {
  if(this.props.editUserStatus7 === true)
  {
      return (<ShareMS
        getUserinfoApp7={(info) => {this.props.getUserinfoApp7(info)}}
          UserEditObject7={this.props.UserEditObject7} 
          changeEditUserStatus7={() => {this.props.changeEditUserStatus7()}}
          />);
  }
}
  ClickButondelete = (idUser) => {
    this.props.ClickButondelete(idUser);
  }
  ClickEditFunction = () => {
    this.props.TEST2();
    this.props.changeEditUserStatus();
}


ClickEditFunction2 = () => {
  this.props.TEST7();
  this.props.changeEditUserStatus7();
}

    render() {
        return (
             <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div className="col-lg-6">
                <iframe title="music" width="100%" height="300" scrolling="no" frameBorder="no"src={this.props.link} />
                </div>
                <div className="col-lg-6">
                  <div className="bg-black text-center h-100 project">
                    <div className="d-flex h-100">
                      <div className="project-text w-100 my-auto text-center text-lg-left">
                        <h3 className="text-white">{this.props.sst}</h3><h5 className="text-white">{this.props.title}</h5>
                        <p className="mb-0 text-white-50">{this.props.content}</p>
                        <div className="btn-group">
                          <input type="button" onClick={(idUser) => this.ClickButondelete(this.props.id)} className="btn btn-outline-warning" value="Delete Music"/>
                          <input type="button" onClick={() => {this.ClickEditFunction()}}   className="btn btn-outline-info" value="Edit Music"/>
                          <input type="button" onClick={() => {this.ClickEditFunction2()}}   className="btn btn-outline-secondary" value="Share"/>
                        </div>
                        {this.isShowForm()}

                        {this.isShowForm2()}
                        <hr className="d-none d-lg-block mb-0 ml-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        );
    }
}

export default Content2;    