import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
               {/* Header */}
  <header className="masthead">
  <div className="container d-flex h-100 align-items-center">
    <div className="mx-auto text-center">
      <h1 className="mx-auto my-0 text-uppercase">MUSIC NATIVE</h1>
      <h2 className="text-white-50 mx-auto mt-2 mb-5">Miễn phí.Thưởng thức âm nhạc theo phong cách nhạc 8D hoàn toàn mới</h2>
      <a href="#info" className="btn btn-primary js-scroll-trigger">GO NOW</a>
    </div>
  </div>
</header>
{/* About Section */}
<section id="info" className="about-section text-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <h2 className="text-white mb-4">MUSIC NATIVE</h2>
        <p className="text-white-50">nền tảng được xây dựng bằng công nghệ mới nhất 2018 cải thiện tốc độ load trang
          <a href="/">Thư viện âm nhạc 8D khổng lồ</a>Phong theo phong cách mới</p>
      </div>
    </div>
    <img src="https://sv2.anh365.com/images/2018/07/16/other-soundcloud.png" className="img-fluid" alt="logo_Soundsclound" />
  </div>
</section>     
            </div>
        );
    }
}

export default Header;  