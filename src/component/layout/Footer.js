import React from "react";
import GetInTouch from "../GetInTouch";
import FooterMenuLinks from "../common/FooterMenu";
import { Container } from "react-bootstrap";

const Footer = ()=> {
  return (
    <>
      <div className="footer_section">
        <Container>
        <div className="site_footer">
          <div className="footer_left_part">
            <div className="get_in_touch">
              <h4>Get in Touch</h4>
              <GetInTouch />
            </div>
            <div className="quick_link">
              <h4>Quick Link</h4>
              <FooterMenuLinks />
            </div>
            <div className="popular_link quick_link">
              <h4>Popular Link</h4>
              <FooterMenuLinks />
            </div>
          </div>
          <div className="footer_right_part"></div>
        </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
