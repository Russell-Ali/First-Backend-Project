const Button = ({ color, text, onClick }: ButtonType) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
type ButtonType = {
  color: string;
  text: string;
  onClick: VoidFunction;
};
Button.defaultProps = {
  color: "red",
  text: "No Name",
};
export default Button;
