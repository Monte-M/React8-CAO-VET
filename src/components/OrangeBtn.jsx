import css from "./OrangeBtn.module.css";

function MyBtn({ title }) {
  return <button className={css.container}>{title}</button>;
}

export default MyBtn;
