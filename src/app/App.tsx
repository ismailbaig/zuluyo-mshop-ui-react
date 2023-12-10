import { useEffect, useState } from "react";
import "../app/App.css";
import { getItemBaseDetails } from "./api/getdata";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getItemBaseDetails().then(
      // success
      (productsdetails) => {
        setIsLoading(() => {
          return false;
        });
        console.log(productsdetails);
      },
      //fail
      () => {}
      //finally
    );
  }, []);

  const getalldashboardDetails = () => {};

  return (
    <>
      <div className="container mt-5 mb-5">
        {isLoading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        {!isLoading && (
          <div className="d-flex justify-content-center row">
            <div className="col-md-10">
              <div>
                <div className="row p-2 bg-white border rounded mt-2">
                  <div className="col-md-3 mt-1">
                    <img className="img-fluid img-responsive rounded product-image" />
                  </div>
                  <div className="col-md-6 mt-1">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h1>itemName</h1>
                      </div>
                      <div>
                        <div id="plusand">
                          <button type="button" className="btn1">
                            <i className="fas fa-minus"></i>
                          </button>
                          <span style={{ fontSize: "large" }}>
                            itemCartCount
                          </span>
                          <button type="button" className="btn1">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className="d-flex flex-row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="ratings mr-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span>310</span>
                        <div>
                          <h2 className="text-success">Free shipping</h2>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <h2 className="mr-1">item.discountPrice</h2>
                        <br />
                        <h4 className="strike-text">item.actualPrice</h4>
                      </div>
                    </div>
                    <div className="mt-1 mb-1 spec-1 text-muted">
                      <span className="dot"></span>
                      <span>itemDetail1</span>
                      <span className="dot"></span>
                      <span>itemDetail2</span>
                      <span className="dot"></span>
                      <span>itemDetail3 </span>
                      <span className="dot"></span>
                      <span>itemDetail4</span>
                      <span className="dot"></span>
                      <span>itemDetail5</span>
                      <span className="dot"></span>
                      <span>
                        itemDetail6
                        <br />
                      </span>
                    </div>

                    <p className="text-justify para mb-0 badge bg-primary text-wrap">
                      description <br />
                      <br />
                    </p>
                  </div>
                  <div
                    className="
              align-items-center align-content-center
              col-md-3
              border-left
              mt-1
            "
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="row p-2 bg-white border rounded mt-2">
                <div>Clear bag</div>
                <div className="d-flex flex-column mt-4">
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="alert alert-success" role="alert" id="alert">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Success!</strong> You have been signed in successfully!
      </div>
      {/* <app-footer ></app-footer>   */}
    </>
  );
}

export default App;
