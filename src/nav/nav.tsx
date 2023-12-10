import StickyFooter from "../stickyfooter/stickyfooter";

function NavBar() {
  return (
    <>
      <div className="container-fluid px-0">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary py-0 px-0">
          <a className="navbar-brand logo" href="#">
            <strong>
              <i>IR sales and services</i>
            </strong>
          </a>
          <button
            className="navbar-toggler mr-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="checkin">
                  Product
                </a>
              </li>
              {/* <!-- Button trigger modal --> */}
              <li className="nav-item right">
                <a className="nav-link">Dashboard</a>
              </li>
              <li>
                <div className="cart-icon">
                  <i
                    style={{ fontSize: "30px" }}
                    className="fas fa-shopping-cart down"
                  ></i>
                  <span className="badge badge-danger">100</span>
                </div>
              </li>

              <li>
                <div className="nav-item right">
                  <i className="bi bi-whatsapp"></i>

                  <a
                    href="whatsapp://send?text=IR Computer welcomes you for your awesome Laptop repairs&phone=+919666295958"
                    data-text="Take a look at this awesome website:"
                    style={{ display: "block" }}
                  >
                    <button
                      style={{
                        fontSize: "24px",
                        backgroundColor: "#49c759",
                        borderRadius: "3px",
                      }}
                    >
                      <i className="fab fa-whatsapp"></i>
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          // tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Enter phone Number
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label>Enter your Registered Phone number</label>
                </div>
              </div>
              <div className="modal-footer">
                <a href="signin">Sign in</a>
                <button type="button" className="btn btn-primary">
                  Send OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ngx-ui-loader fgsColor="#ff4081" text = "
Please wait .."></ngx-ui-loader>
<router-outlet></router-outlet> */}

    </>
  );
}

export default NavBar;
