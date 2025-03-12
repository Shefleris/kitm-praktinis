import React from "react";
import { Link } from "react-router-dom"

const Page404 = () => {
  return (
    <>
        <h1>
          Page not found
        </h1>
        <p>The page you were searching for could not be found</p>
        <Link to="/" className="btn btn-primary" >Return to homepage</Link>
    </>
  )
};

export default Page404;