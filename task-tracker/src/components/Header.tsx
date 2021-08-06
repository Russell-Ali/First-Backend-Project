import Button from "./Button";
const Header = ({ title, onAdd, showAdd }: HeaderType) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "orange" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};
type HeaderType = {
  title: string;
  onAdd: VoidFunction;
  showAdd: boolean;
};
Header.defaultProps = {
  title: "Task Tracker",
};
export default Header;
