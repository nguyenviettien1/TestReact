import React from "react";

class Lienhe extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div
              className="panel-heading"
              style={{ backgroundColor: "#189eff", color: "white" }}
            >
              <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>Liên hệ</h2>
            </div>
            <div className="panel-body">
              {/* item */}
              <h3>
                <span className="glyphicon glyphicon-align-left" /> Thông tin
                liên hệ
              </h3>
              <div className="break" />
              <h4>
                <span className="glyphicon glyphicon-home " /> Địa chỉ :{" "}
              </h4>
              <p>34 Đại La - Hai Bà Trưng - Hà Nội </p>
              <h4>
                <span className="glyphicon glyphicon-envelope" /> Email :{" "}
              </h4>
              <p>viettien98htttbn@gmail.com </p>
              <h4>
                <span className="glyphicon glyphicon-phone-alt" /> Điện thoại :{" "}
              </h4>
              <p>0394590033 </p>
              <br />
              <br />
              <h3>
                <span className="glyphicon glyphicon-globe" /> Bản đồ
              </h3>
              <div className="break" />
              <br />
              <div id="map" style={{ width: "700px", height: "700px", marginBottom:"100px",}}>
                <iframe
                  title="jsx-a11y/iframe-has-title"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6888436890704!2d105.84344031361604!3d21.005106393964237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad5569f4fbf1%3A0x5bf30cadcd91e2c3!2zxJDhuqBJIEjhu4xDIELDgUNIIEtIT0EgQ-G7lE5HIFRS4bqmTiDEkOG6oEkgTkdIxKhB!5e0!3m2!1svi!2s!4v1578037447869!5m2!1svi!2s"
                  width={700}
                  height={700}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Lienhe;
