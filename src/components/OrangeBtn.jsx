import css from "./OrangeBtn.module.css";

function MyBtn({ title, handleClick }) {
  return (
    <button onClick={handleClick} className={css.container}>
      {title}
    </button>
  );
}

export default MyBtn;
