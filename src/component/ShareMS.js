import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';
import {connect} from 'react-redux';
class ShareMS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link : this.props.UserEditObject7.link
        }
    }
    //----------------------------vừa lưu thông tin vừa làm cầu nối để đẩy thông tin lên app-------------//
    SaveButton = () => {
        // khi ấn vào savebutton tạo đối tượng info thì nó sẽ lấy thông tin ở user
        // gồm ID , NAME , TEL , PERMISSION
        var info = {};
        info.link = this.state.link;
        this.props.getUserinfoApp7(info);
        this.props.changeEditUserStatus7(); // ẩn form
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
                <div className="card-header">LINK bài hát</div>
                  <div className="card-body">
                    <div className="form-group">
                      <input type="text" defaultValue={this.props.UserEditObject7.link} onChange={(event) => this.isChange(event)}  name="link"    className="form-control" disabled  placeholder="Source bài hát" />
                    </div>
                    <div className="form-group">
                        <Clipboard className="btn btn-block btn-success" data-clipboard-text={this.props.UserEditObject7.link}>
                            COPY LINK
                            {this.props.AlertOn("Bạn đang tiến hành chia sẻ bài hát", "success")}
                        </Clipboard>
                     </div>
                  </div>
                </div>
             </div>
        </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(ShareMS);