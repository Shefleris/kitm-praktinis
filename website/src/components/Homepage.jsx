import React, {useState, useEffect } from "react";
import { questionApi } from "../services/questionApi";

const Homepage = () => {
  const [categories, setCategories] = useState(null)
  useEffect(()=>{
    const getCategories = async () =>{
      return questionApi().getCategories()
    }
  })
  return (
		<>
      <div>
        <h1>This is the landing page</h1>
      </div>
		</>
	)
};

export default Homepage;