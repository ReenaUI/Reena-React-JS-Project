import React from 'react';
class Riskindicator extends React.Component {
  render() {
    return (
      <div className="risk-indicator">

        <h6 className="pulse-main investment sub-heading">Risk Indicator
            <div className="popover__wrapper">
        
                <h2 className="popover__title">
                  <div className="center pulse-wrap">
                    <div className="pulse"></div>
                  </div>
                </h2>
              
              <div className="popover__content popover__content-left">
                <p>Managed funds in New Zealand must have a standard risk indicator. The risk indicator is designed to help investors understand the uncertainties both for loss and growth that may affect their investment. You can compare funds using the risk indicator. More information can be found on the Product Disclosure Statement downloadable from the Investment Options page.</p>
              </div>
            </div>

          </h6>
        <div className="risk-box">
          <div className="first-box">
            <h6>Lower risk</h6>
          </div>
          <div className="middle-box">
              <span className="risk">1</span>
              <span className="risk">2</span>
              <span className="risk">3</span>
              <span className="risk">4</span>
              <span className="risk risk-point-radius">5</span>
              <span className="risk">6</span>
              <span className="risk">7</span>
          </div>
          <div className="last-box">
            <h6>Higher risk</h6>
          </div>
        </div>
        <div className="footer-risk-box">
            <h6>Potentially lower returns</h6>
            <h6>Potentially higher returns</h6>
        </div>
      </div>
    );
  }
}
export default Riskindicator;