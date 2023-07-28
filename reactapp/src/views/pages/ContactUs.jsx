import React, { lazy, Component } from "react";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconHouse } from "bootstrap-icons/icons/house.svg";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";

const ContactUsForm = lazy(() => import("../../components/ContactUsForm"));

class ContactUsView extends Component {
  onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (
      <div className="container my-3">
        <div className="row g-3">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <IconEnvelope className="i-va" /> Send Message
              </div>
              <div className="card-body">
                <ContactUsForm onSubmit={this.onSubmit} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-header">
                <IconHouse className="i-va" /> Address
              </div>
              <div className="card-body">
                <h6 className="card-title border-bottom border-dark pb-2">Head Office</h6>
                <address>
                  <strong>Twitter, Inc.</strong>
                  <br />
                  Damietta
                  <br />
                  Egypt
                  <br />
                  <IconTelephone className="i-va" />{" "}
                  <abbr title="Phone">P:</abbr> (+20) 1063920694
                </address>
                <h6 className="card-title border-bottom border-dark pb-2">Development Office</h6>
                <address>
                  <strong>Twitter, Inc.</strong>
                  <br />
                  Damietta
                  <br />
                  Egypt
                  <br />
                  <IconTelephone className="i-va" />{" "}
                  <abbr title="Phone">P:</abbr> (+20) 1063920694
                </address>
              </div>
            </div>
            <div className="card">
              <div className="google-maps">
                <iframe
                 src="https://www.bing.com/maps/embed?h=400&w=500&cp=30.184485947752762~31.464901147524813&lvl=8.33&typ=d&sty=r&src=SHELL&FORM=MBEDV8" 
                  width={400}
                  height={300}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsView;
