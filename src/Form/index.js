import "./style.css";

const Form = () => (
    <form className="form">
     <input className="form__field" placeholder="Enter your task here" required/>
     <button className="form__button">Add task</button>
    </form>
);

export default Form;