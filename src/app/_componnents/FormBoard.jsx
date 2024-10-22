import React from "react";

const FormBoard = ({action}) => {
  return (
    <form
      action={action}
      className="mt-6 flex flex-col items-center space-y-4 w-full"
    >
      <input
        type="text"
        className="border-2 border-gray-300 p-2 rounded-lg w-full max-w-md"
        placeholder="Nom du tableau"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Créer un nouveau tableau +
      </button>
    </form>
  );
};

export default FormBoard;
