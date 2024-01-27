import React, { useState } from "react";
import { MdClose, MdCheck } from "react-icons/md";

export default function CustomInput(props) {
    const {
        defaultValue,
        saveText,
        cancelEdit,
        className,
        checkIcon = <MdCheck className="text-xl m-2"/>,
        closeIcon = <MdClose className="text-xl m-2 mr-0" />,
        rows,
        ...others
    } = props;
    const [value, setValue] = useState(defaultValue);

    const updateText = () => {
        saveText(value);
    };

    return (
        <div className="flex items-center">
            <textarea
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                value={value}
                className={className}
                rows={rows}
            />
            <button onClick={updateText}>
                {checkIcon}
            </button>
            <button onClick={cancelEdit}>
                {closeIcon}
            </button>
        </div>
    );
}
