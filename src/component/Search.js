import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tempvalue : '',
        UserInfo : {}
    }
}
  ischange = (event) => {
    this.setState({
      tempvalue:event.target.value
    });
    this.props.Checkconnect(this.state.tempvalue);
    
  }
 
  
    render() {
        return (
            <div>
                {/* Projects Section */}
  {/* form search */}
<section className="signup-section">
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-lg-8 mx-auto text-center">
        <i className="fa fa-search fa-2x mb-2 text-white" />
        <h2 className="text-white mb-5">Tìm kiếm bài hát</h2>
        <form className="form-inline d-flex">
          <input type="text" onChange={(event) => this.ischange(event)} className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputText" placeholder="Nhập Tên Bài hát" />
          <button type="submit" onClick={(dl) => this.props.Checkconnect(this.state.tempvalue)} className="btn btn-primary mx-auto">Tìm kiếm</button>
          
        </form>
      </div>
    </div>
  </div>
</section>    
            </div>
        );
    }
}

export default Search;  