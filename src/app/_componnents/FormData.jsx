import React from "react";
import { createBoard } from "../_actions/board";

const FormData = () => {
return (
    <form action={createBoard} className="mt-4 flex flex-col items-center">
        <input
            type="text"
            name="title"
            placeholder="Nom du board..."
            className="p-2 rounded-lg border border-gray-300 mb-2 w-full text-gray-900"
        />
        <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300 "
        >
            Créer un board+
        </button>
    </form>
);
};

export default FormData;
