import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="container-fluid m-4">
        {/* <h4 className="mb-4 m_head" style={{textAlign:"center",color:"white",}}>Getting to know me</h4> */}

        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            Getting to know me
          </text>
        </svg>

        <p className="me-4 about" style={{ textAlign: "justify" }}>
          Culminating my MCA journey, I delved into the dynamic world of
          software development with a focused MERN stack internship. This
          experience enriched my skills in MongoDB, Express.js, React, and
          Node.js, fostering a deeper passion for creating innovative solutions.
          As a dedicated MCA graduate, I am poised to bring my versatile
          expertise to challenging projects, combining my academic foundation
          with real-world application for impactful contributions to the
          field.My commitment to continuous learning and adaptability is evident
          through my hands-on experience in various technologies. Aspiring to
          contribute my skills and enthusiasm to impactful projects, I am poised
          for success in the dynamic realm of software development
        </p>
      </div>
      <div className="container animate__animated animate__slideInDown animate__duration-20s  two-sided-layout">
        <table className=" mx-auto tab">
          <tbody>
            <tr>
              <td style={{ padding: 20 }}>Name</td>
              <td style={{ padding: 20 }}>:</td>
              <td style={{ padding: 20 }}>Blessy K Babu</td>
            </tr>
            <tr>
              <td style={{ padding: 20 }}>Date Of Birth</td>
              <td style={{ padding: 20 }}>:</td>
              <td style={{ padding: 20 }}>October 11,1999</td>
            </tr>
            <tr>
              <td style={{ padding: 20 }}>Address</td>
              <td style={{ padding: 20 }}>:</td>
              <td style={{ padding: 20 }}>
                Kaleeckal ,Elimullumplackal P O ,Avolikuzhy
              </td>
            </tr>
            <tr>
              {/* <td style={{ verticalAlign: "top" }}>Description</td>
                <td style={{ verticalAlign: "top" }}>:</td>
                <td style={{ verticalAlign: "top" }}>{Data.description}</td> */}
              <td style={{ padding: 20 }}>Email</td>
              <td style={{ padding: 20 }}>:</td>
              {/* <Link > */}
              <td style={{ padding: 20 }}>blessykbabu5@gmail.com</td>
              {/* </Link> */}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
