
import './stickyfooter.css'


function StickyFooter(){
    return(
<>
<div className="dashboardfooter" style={{marginTop:'20px'}}>
  <button type="button" className="btn btn-primary btn-ripple">
    <a>
      <i className="fas fa-home"></i>
     
    </a>  Home</button>
  <button type="button" className="btn btn-primary btn-ripple"><a>
    <i className="fas fa-shopping-bag"></i>
      <span className="badge badge-danger">100</span>
   
  </a>  Bag</button>
  <button type="button" className="btn btn-primary btn-ripple"><a>
    <i className="fas fa-user"></i>
  </a>  Account</button>
</div>
</>
    );
}

export default StickyFooter;