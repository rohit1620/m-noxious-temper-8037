import './footer.css'

function Footer(props) {
  return(<div style={{textAlign:"left",backgroundColor:"black"}}><div className="footer" >
  <div className="footer_upper">
    <div className="links">
      <div>
        <p>
          <a
            className="material-icons jss290 fab fa-facebook-square"
            aria-hidden="true"
            href="https://www.facebook.com/interntheory"
            target="_blank"
            style={{color: 'rgb(255, 255, 255)'}}
          ></a>
        </p>
      </div>
      <div>
        <p>
          <a
            className="material-icons jss290 fab fa-linkedin"
            aria-hidden="true"
            href="https://www.linkedin.com/company/interntheory"
            target="_blank"
            style={{color: 'rgb(255, 255, 255)'}}
          ></a>
        </p>
      </div>
      <div>
        <p>
          <a
            className="material-icons fab fa-twitter-square"
            aria-hidden="true"
            href="https://twitter.com/InternTheory"
            target="_blank"
            style={{color: 'rgb(255, 255, 255)'}}
          ></a>
        </p>
      </div>
      <div>
        <a
          className="material-icons jss290 fab fa-instagram jss282"
          aria-hidden="true"
          href="https://www.instagram.com/interntheory"
          target="_blank"
          style={{color: 'rgb(255, 255, 255)'}}
        ></a>
      </div>
    </div>
    <div className="search">
      <div className="by_place">
        <div>Crocs Insiders</div>
        <div className="hr_line"></div>
        <div><p>Crocs Club</p></div>
        <div><p>Collaborations & Limited</p></div>
        <div><p>Student Discount</p></div>
        <div><p>Teacher Discount</p></div>
        <div><p>Healthcare Discount</p></div>
      </div>
      <div className="by_profile">
        <div>Company</div>
        <div className="hr_line"></div>
        <div>
          <p>About Crocs</p>
        </div>
        <div>
          <p>Crocs Purpose</p>
        </div>
        <div>
          <p>Careers</p>
        </div>
        <div>
          <p>Investor Relations</p>
        </div>
        <div>
          <p>Custom Orders</p>
        </div>
        <div>
          <p>Wholesale Inquiries</p>
        </div>
      </div>

      <div className="by_type">
        <div>Help</div>
        <div className="hr_line"></div>
        <div>
          <p>Order Status & Returns</p>
        </div>
        <div>
          <p>FAQs</p>
        </div>
        <div>
          <p>Size Chart</p>
        </div>
        <div>
          <p>Accessibility</p>
        </div>
        <div>
          <p>Caring for your Crocs</p>
        </div>
      </div>
    </div>
  </div>
  <div className="footer_lower">
    <div className="footer_lower_links">
      {/* <div>FIND INTERNSHIPS</div>
      <div>POST INTERNSHIP</div>
      <div>COURSES</div>
      <div>TERMS AND CONDITIONS</div>
      <div>PRIVACY POLICY</div>
      <div>CONTACT US</div>
      <div>ABOUT US</div>
      <div>SITEMAP</div> */}
      Customer Service
Hours of Operation:
MonMonday
Opens at 9 AM ETOpens at 9 a.m. Eastern Time
Tues - ThursTuesday through Thursday
24 Hours24 hours
FriFriday
Closes at 5 PM ETCloses at 5 p.m. Eastern Time
Sat - SunSaturday through Sunday
CLOSEDClosed

Chat Not Available
Contact Us
    </div>
    <div className="hr_line"></div>
  </div>
  <div className="copyright">
    <p>Privacy Preferences | Terms | Privacy (Updated 2/1/20) | Ad Choices | Do Not Sell My Personal Information | CA Supply Chains Act</p>
  </div>
</div></div>)
};

export default Footer;


