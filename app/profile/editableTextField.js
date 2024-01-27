"use client";
import CustomInput from "./customInput";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

export default function EditableTextField({ val, className, rows = 2 }) {
    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(val);

    const handleEdit = () => {
        setEdit(true);
    };

    const save = (val) => {
        setValue(val);
        setEdit(false);
    };

    const close = () => {
        setEdit(false);
    };

    return (
        <>
            {!edit ? (
                <div className="flex items-center justify-between">
                    <p className={`text-lg ${className}`}>{value}</p>
                    <button onClick={handleEdit} className="p-3 pr-0">
                        <FiEdit />
                    </button>
                </div>
            ) : (
                <CustomInput
                    defaultValue={value}
                    saveText={save}
                    cancelEdit={close}
                    className="border-2 border-slate-800 rounded-md p-2 w-full resize-none"
                    rows={rows}
                />
            )}
        </>
    );
}
