import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
            <section className="contact-section bg-black">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <i className="fas fa-map-marked-alt text-primary mb-2" />
                      <h4 className="text-uppercase m-0">Address</h4>
                      <hr className="my-4" />
                      <div className="small text-black-50">Tổ 4 phường tân thịnh - TP.Thái Nguyên</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <i className="fas fa-envelope text-primary mb-2" />
                      <h4 className="text-uppercase m-0">Email</h4>
                      <hr className="my-4" />
                      <div className="small text-black-50">
                        <a href="/">Phantuanw.o.t@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <i className="fas fa-mobile-alt text-primary mb-2" />
                      <h4 className="text-uppercase m-0">Phone</h4>
                      <hr className="my-4" />
                      <div className="small text-black-50">01654.665.693</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social d-flex justify-content-center">
                <a href="/" className="mx-2">
                  <i className="fab fa-twitter" />
                </a>
                <a href="/" className="mx-2">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="/" className="mx-2">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer className="bg-black small text-center text-white-50">
            <div className="container">
              tuân phan CODER
            </div>
          </footer>  
            </div>
        );
    }
}

export default Footer;  