import React, { Component } from 'react';
import Content2 from './Content2';

class Content extends Component {
    ClickButondelete = (idUser) => {
        this.props.ClickButondelete(idUser);
      }

    mapingdatauser = () => this.props.dataUserprop.map((value,key) => (
        <Content2
        getUserinfoApp2 = {(info) => this.props.getUserinfoApp(info)}
        getUserinfoApp7 = {(info) => this.props.getUserinfoApp7(info)}

        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        changeEditUserStatus7={() => this.props.changeEditUserStatus7()}

         ClickButondelete={(idUser) => this.ClickButondelete(idUser)}
         TEST2={(user) => this.props.TEST(value)}
         TEST7={(user) => this.props.TEST7(value)}
         id={value.id}
         key={key}
         sst={key}
         title={value.title}
         content={value.content}
         link={value.link}

         editUserStatus={this.props.editUserStatus} 
         editUserStatus7={this.props.editUserStatus7} 

         UserEditObject={this.props.UserEditObject} 
         UserEditObject7={this.props.UserEditObject7}   
        />
    ))
    render() {
        return (
            <div>
            <section id="LIBRARY" className="projects-section bg-light">
            <div className="container">
              {
                  this.mapingdatauser()
              }
            </div>
          </section>   
            </div>
        );
    }
}

export default Content; 