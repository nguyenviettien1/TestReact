import React from "react";

class Footer extends React.Component {
  render() {
    return (
        <div>
        <hr className="my-4" />
        <div className="container-fluid padding footer-index">
          <div className="row padding">
            <div className="col-md-4">
              <h3><b>RESOURCES</b></h3>
              <div className="table-responsive">
                <table className="tablet color-tb2">
                  <tbody>
                    <tr>
                      <td>Posts</td>
                      <td>Organizations</td>
                    </tr>
                    <tr>
                      <td>Questions</td>
                      <td>Tags</td>
                    </tr>
                    <tr>
                      <td>Video</td>
                      <td>Authors</td>
                    </tr>
                    <tr>
                      <td>Discussions</td>
                      <td>Recommend System</td>
                    </tr>
                    <tr>
                      <td>Tools</td>
                      <td>Machine Learning</td>
                    </tr>
                    <tr>
                      <td>System Status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4">
              <h3><b>INFORMATION</b></h3>
              <div className="table-responsive">
                <table className="tablet color-tb2">
                  <tbody>
                    <tr>
                      <td>Họ và tên: Nguyễn Viết Tiến</td>
                    </tr>
                    <tr>
                      <td>MSSV: 20164078</td>
                    </tr>
                    <tr>
                      <td>Lớp: CNTT1.01</td>
                    </tr>
                    <tr>
                      <td>Viện: Công Nghệ Thông Tin &amp; Truyền Thông</td>
                    </tr>
                    <tr>
                      <td>Trường: Đại học Bách Khoa Hà Nội</td>   
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4">
              <h3><b>MOBILE APP</b></h3>
              <div className="row">
                <div className="col-md-6">                       
                  <img className="mobi-app" src="images/ch-play.jpg" alt="" />                       
                </div>
                <div className="col-md-6">
                  <img className="mobi-app" src="images/app-store1.jpg" alt="" />     
                </div>
              </div>
              <h3><b>LINKS</b></h3>
              <div className="row">
                <div className="col-12 social padding">
                  <a href="fb.com"><i className="fab fa-facebook" /></a>
                  <a href="twitter.com"><i className="fab fa-twitter" /></a>
                  <a href="google.com"><i className="fab fa-google-plus-g" /></a>
                  <a href="instagram.com"><i className="fab fa-instagram" /></a>
                  <a href="youtube.com"><i className="fab fa-youtube" /></a>
                  <a href="github.com"><i className="fab fa-github" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
export default Footer;
