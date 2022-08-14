import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDones }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={tasks.id}
                className={`tasks__item {
                task.done && hideDones 
                ? "tasks__item--hidden" 
                : ""`}>

                <button className="tasks__button tasks__button--toggleDone">
                    {task.done
                        ? "✔"
                        : ""}
                </button>
                <span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;