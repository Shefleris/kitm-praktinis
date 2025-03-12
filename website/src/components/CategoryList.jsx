import React from "react";

const CategoryList = () => {
	const [categories, setCategories] = useState(null)
		useEffect(()=>{
			const getCategories = async () =>{
				return questionApi().getCategories()
			}
			setCategories(getCategories)
		})
  return (
		<>
			<div>
				{!categories && categories.forEach(element => {
					return (
						element
					)
				})}
			</div>
		</>
	)
};

export default CategoryList;