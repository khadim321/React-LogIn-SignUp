import React, {Component} from 'react';
import './Footer.css';
import payday from "./Images/payday.png";

class Footer extends Component {
    render(){
        return (
          <>
        <div className="Before-footer">
        <img src={payday} className="img-sty"/>
      <div className="footer">
        <span className="left"> @All rights reserved</span>
        <span className="right"> Made with ❤ in Oz</span>
      </div>
      </div>
    </>
 
        )
    }
}
export default Footer;