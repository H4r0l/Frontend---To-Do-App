import React, { useState } from "react";

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    
    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row right aligned">
                    <div className="column five wide">
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter something to do..."
                            style={{fontFamily: "'Fredoka', sans-serif", backgroundColor: "#B5B0B0"}}
                            className="rounded-2 text-black"
                        />
                    </div>
                    
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="white plus icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;