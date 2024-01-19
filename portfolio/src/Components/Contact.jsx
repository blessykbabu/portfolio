import phone from "../image/phone.png";
import ad from "../image/ad.png";
import email from "../image/email.png";
export default function Contact() {
    
  return (
    <>
      <div className="container-fluid">
        {/* <h4 style={{ textAlign: "center", color: "white" }} className="m_head">contact me</h4> */}
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Contact Me
          </text>
        </svg>
       
        <p style={{ textAlign: "justify", color: "white" }} className="contact">
          Thank you for visiting! Your thoughts and inquiries are important to
          me. Please feel free to send me a message, and I'll get back to you as
          soon as possible. Let's connect and explore new possibilities
          together.
        </p>

        <div className="container">
          <div className="row">
            <div className="col shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card " style={{ width: "18rem" }}>
                <img src={ad}  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Address</h5>
                  <p className="card-text">
                    Kaleeckal ,Elimullumplackel P O 
                  </p>
                
                </div>
              </div>
            </div>
            <div className="col shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card " style={{ width: "18rem" ,boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"}}>
                <img src={phone} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Contact Number</h5>
                  <p className="card-text">
                   +91 790230155
                  </p>
               
                </div>
              </div>
            </div>
            <div className="col shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="card " style={{ width: "18rem" }}>
                <img src={email}   className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Email Address</h5>
                  <p className="card-text">
                blessykbabu5@gmail.com
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">

        <form className="mx-auto">

        <div className="mb-3 ">
   
    <input
      type="password"
      className="form-control "
      id="exampleInputPassword1"
      placeholder="Name"
      style={{width:300}}
    />
  </div>
  <div className="mb-3">
 
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Email Address"
      style={{width:300}}
    />
  
  </div>
  <div className="mb-3">
    
    <input
      type="text"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Subject"
      style={{width:300}}
    />
  </div>
  <div className="mb-3">
   
    <textarea
      type="text"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Mesaage"
      rows={10}
      cols={20}
      style={{width:300}}
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Send Message
  </button>
</form>

        </div>
      </div>
    </>
  );
}
