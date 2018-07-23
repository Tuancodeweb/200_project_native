import React, { Component } from 'react';

class EditMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.UserEditObject.id,
            title : this.props.UserEditObject.title,
            content : this.props.UserEditObject.content,
            link : this.props.UserEditObject.link
        }
    }
    //----------------------------vừa lưu thông tin vừa làm cầu nối để đẩy thông tin lên app-------------//
    SaveButton = () => {
        // khi ấn vào savebutton tạo đối tượng info thì nó sẽ lấy thông tin ở user
        // gồm ID , NAME , TEL , PERMISSION
        var info = {};
        info.id = this.state.id;
        info.title = this.state.title;
        info.content = this.state.content;
        info.link = this.state.link;


      


        this.props.getUserinfoApp3(info);
        this.props.changeEditUserStatus(); // ẩn form
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <div>
            <form>
            <div className="card text-left">
              <div className="card text-white bg-primary">
                <div className="card-header">Chỉnh sửa bài hát</div>
                  <div className="card-body">
                    <div className="form-group">
                      <input type="text" defaultValue={this.props.UserEditObject.title} onChange={(event) => this.isChange(event)} name="title" className="form-control"  placeholder="Tên bài hát"/>
                    </div>
                    <div className="form-group">
                      <input type="text" defaultValue={this.props.UserEditObject.content} onChange={(event) => this.isChange(event)}  name="content"  className="form-control"  placeholder="Nội dung bài hát" />
                    </div>
                    <div className="form-group">
                      <input type="text" defaultValue={this.props.UserEditObject.link} onChange={(event) => this.isChange(event)}  name="link"    className="form-control"  placeholder="Source bài hát" />
                    </div>
                    <div className="form-group">
                      <input type="reset" onClick={() => {this.SaveButton()}} className="btn btn-block btn-warning" value="thêm mới"/>
                     </div>
                  </div>
                </div>
             </div>
        </form>
            </div>
        );
    }
}

export default EditMusic;