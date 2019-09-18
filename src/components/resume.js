import React from "react"
import resume from "../templates/JonathanHelveyResume.pdf"

const Resume = () => {
  return (
    <div className="resume wrapper2">
      <object type="application/pdf" data={resume} title="resume">
        This browser does not support PDFs.
        <iframe title="Jonathan-Helvey-Resume" src={Resume} />
      </object>
    </div>
  )
}

export default Resume
