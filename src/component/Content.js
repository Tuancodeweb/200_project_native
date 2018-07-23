import React, { Component } from 'react';
import Content2 from './Content2';

class Content extends Component {
    ClickButondelete = (idUser) => {
        this.props.ClickButondelete(idUser);
      }

    mapingdatauser = () => this.props.dataUserprop.map((value,key) => (
        <Content2
        getUserinfoApp2 = {(info) => this.props.getUserinfoApp(info)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        ClickButondelete={(idUser) => this.ClickButondelete(idUser)}
         TEST2={(user) => this.props.TEST(value)}
         id={value.id}
         key={key}
         sst={key}
         title={value.title}
         content={value.content}
         link={value.link}

         editUserStatus={this.props.editUserStatus} 
         UserEditObject={this.props.UserEditObject}  
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