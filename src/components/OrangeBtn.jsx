import css from "./OrangeBtn.module.css";

function MyBtn({ title, handleClick, className }) {
  return (
    <button onClick={handleClick} className={css.container + " " + className}>
      {title}
    </button>
  );
}

export default MyBtn;
