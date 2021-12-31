import "./Card.css";

function Card(props) {
  // Remmember the fuking white space
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
