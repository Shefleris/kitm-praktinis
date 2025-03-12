const QuestionCard = (props) =>{
  return (
		<article>
			<h2>
				{props.title}
			</h2>
			<p>{props.status}</p>
			<Link to={`/questions/${[props.id]}`}>Read more...</Link>
		</article>
	)
};

export default QuestionCard;