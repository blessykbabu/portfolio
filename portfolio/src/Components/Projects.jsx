  
 import web from "../image/web.png";
 import e from "../image/hr.jpg";
 import s from "../image/ecom.jpg";
 import { Link } from "react-router-dom";
  export default function Projects() {
  return (
    <>
      <div className="container-fluid">
        {/* <h4  className="mb-3 m_head" style={{textAlign:"center"}}>Projects</h4> */}
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          Projects
          </text>
        </svg>
     <div className="container">
      <div className="row">
        <div className="col-6">
         <Link to="https://github.com/blessykbabu/ems-server"> <img src={e} height={300} width={300}/></Link>
        </div>
        <div className="col-6">
          <Link to="https://github.com/blessykbabu/e-prjct"><img src={s} height={300} width={300}/></Link>
        </div>
      </div>
     </div>

        <div className="container prj">
         <img src={web} style={{display:"inline-block"}} /> <h5 style={{textAlign:"center",display:"inline-block"}} className="m-3">Employee Mnagement system</h5>
          <p>
            Introducing an Employee Management System built with React, Express,
            Node, and MongoDB. This project facilitates easy employee
            administration, allowing admins to create, edit, and delete employee
            profiles. The system ensures security with one-time password emails,
            and both front-end and back-end validations. This Employee
            Management System is a testament to our commitment to providing
            businesses with a flexible, secure, and user-centric solution for
            effective employee administration.
          </p>


          <h6 className="m-3">Key Features</h6>

          <ol>
            <li>User-Friendly Interface:
                <dl>
                Navigate effortlessly through a sleek and intuitive user interface designed with React, ensuring a smooth user experience.

                </dl>
            </li>


            <li>Admin Empowerment:
                <dl>
                Admins can effortlessly create new employees, triggering an automated email with a one-time password for a secure onboarding process.
                </dl>
            </li>
            <li>Enhanced Security: 
                <dl>
                The system incorporates stringent validation at both the front end and back end, ensuring data integrity and minimizing vulnerabilities.
                </dl>
            </li>

            <li>
Employee Self-Service:
                <dl>
                Empower employees to manage their profiles by securely logging in, changing passwords, and accessing relevant information.
                </dl>
            </li>
            <li>Dynamic Updates: 
                <dl>
                Admins have the flexibility to edit employee details, adapt to changes, and efficiently handle employee records.

                </dl>
            </li>
            <li>Efficient Deletion:
                <dl>
                Admins can securely delete employee profiles when needed, maintaining data hygiene and compliance.
                Enhance workforce management with Employee Management System, featuring soft deletion for secure record-keeping and streamlined employee lifecycle management
                </dl>
            </li>
          </ol>
        </div>

        <div className="container prj">
        <img src={web} style={{display:"inline-block"}} /> <h5 style={{textAlign:"center",display:"inline-block"}} className="m-3">E-commerce</h5>
          <p>
            React E-Commerce Platform with MongoDB: Connecting Sellers and
            Buyers Seamlessly. Experience the next level of online commerce with
            our cutting-edge E-Commerce Platform built using React for dynamic
            front-end interactions and MongoDB as the robust database. This
            platform introduces a distinctive dual-role system, empowering
            sellers to showcase and sell products, while buyers enjoy a secure
            and streamlined purchasing process.
            <h6 className="m-3">Key Features:</h6>
            <ol>
              <li>
                Seller Empowerment:
                <dl>
                  Sellers gain exclusive access to create and manage product
                  listings, showcasing their offerings to potential buyers.
                </dl>
              </li>

              <li>
                Buyer-Centric Experience:
                <dl>
                  Buyers can seamlessly browse products, make secure purchases,
                  and enjoy a hassle-free shopping experience tailored to their
                  needs.
                </dl>
              </li>
              <li>
                Exclusive Buyer Purchases
                <dl>
                  Only registered buyer accounts are eligible to make purchases,
                  ensuring a dedicated marketplace for product transactions.
                </dl>
              </li>
              <li>
                Admin Oversight:
                <dl>
                  The system features an admin panel allowing oversight of the
                  entire platform. Admins can efficiently manage and maintain
                  the site, with the ability to remove products or users in case
                  of issues or violations.
                </dl>
              </li>

              <li>
                Efficient Product Management:
                <dl>
                  Sellers can easily add, update, or remove product listings,
                  while the admin maintains control over the overall product
                  catalog.
                </dl>
              </li>

              <p>
                React E-Commerce Platform is a comprehensive solution that
                bridges the gap between sellers and buyers, offering a secure,
                user-friendly, and efficient online marketplace. The admin
                system provides essential oversight, ensuring a smooth and
                trouble-free shopping experience for all users.
              </p>
            </ol>
          </p>
        </div>
      </div>
    </>
  );
}
