import "./style.css";

const Buttons = ({tasks, hideDoneTasks, done}) => {

    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button className="buttons__button">{hideDoneTasks ? "Show" : "Hide"} completed </button>
            <button className="buttons__button" disabled={tasks.every(({ done }) => done)}> complete all </button>
        </div>
    )
};

export default Buttons;