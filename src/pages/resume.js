import React from "react"
import resume from "../templates/JonathanHelveyResume.pdf"
import Header from "../components/header"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Resume = () => {
  return (
    <Layout>
      <Header />
      <SEO title="Home" />
      <div className="resume wrapper2">
        <div
          style={{ display: "flex", justifyContent: "center", margin: "0px" }}
        >
          <button className="resume-button">
            <a href={require("../templates/JonathanHelveyResume.pdf")} download>
              Download Resume PDF
            </a>
          </button>
        </div>
        <object type="application/pdf" data={resume} title="resume">
          This browser does not support PDFs.
          <iframe title="Jonathan-Helvey-Resume" src={Resume} />
        </object>
      </div>
    </Layout>
  )
}

export default Resume
