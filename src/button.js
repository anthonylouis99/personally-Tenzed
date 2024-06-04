function Button(props) {
  return (
    <button
      style={props.style}
      onClick={props.onClickFunction}
      className="general-button"
    >
      {props.value}
    </button>
  );
}
export default Button;
