import React, { Component } from 'react';
class UpMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      title:"",
      content:"",
      link:""
    }
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    })
    
  }
  
    render() {
        return (
            <div>
            <section id="CONTACT" className="signup-section">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto text-center">
                  <i className="far fa-paper-plane fa-2x mb-2 text-white" />
                  <h2 className="text-white mb-5">Đăng tải lưu trữ nhạc tại bộ nhớ</h2>
                  <form className="form-inline d-flex">
                    <textarea type="text" onChange={(event) => this.isChange(event) } name="title" className="form-control flex-fill mr-3 mr-sm-2 mb-4 mb-sm-3" id="inputTitle" placeholder="Tên Bài Hát" defaultValue={""} />
                    <textarea type="text" onChange={(event) => this.isChange(event) } name="content" className="form-control flex-fill mr-3 mr-sm-2 mb-4 mb-sm-3" id="inputContent" placeholder="Thông tin Bài Hát" defaultValue={""} />
                    <textarea type="text" onChange={(event) => this.isChange(event) } name="link" className="form-control flex-fill mr-3 mr-sm-2 mb-4 mb-sm-3" id="inputLink" placeholder="Source Bài Hát" defaultValue={""} />
                    <button type="reset" onClick={(title,content,link) => this.props.Getnewmusicdata(this.state.title,this.state.content,this.state.link)} className="btn btn-primary mx-auto">tải lên</button>
                  </form>
                </div>
              </div>
            </div>
          </section>  
            </div>
        );
    }
}

export default UpMusic; 