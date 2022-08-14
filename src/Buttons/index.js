import React, { Fragment } from "react";
import "./style.css";

const Buttons = ({ tasks, hideDones }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <Fragment>
                <button className="buttons__button">
                    {hideDones ? "Pokaż" : "Ukryj"}
                    ukończone
                </button>
                <button className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </Fragment>
        )}

    </div>

);

export default Buttons;