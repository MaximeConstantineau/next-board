import React from "react";
import { createClient } from "../_lib/supabase/server";
import Link from "next/link";
import FormBoard from "../_componnents/formBoard";
import { createBoard } from "../_actions/board";

const HomePage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { full_name, avatar_url } = user.user_metadata;
  const { data: boards } = await supabase.from("boards").select("*");
  console.log(boards);

  const handleCreateBoard = async (title) => {
    await createBoard(title);
    // Optionally, re-fetch the boards or update the state to reflect the new board
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl w-full my-4">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Bienvenue sur l'application
        </h1>
        <p className="text-xl mb-4 text-black">
          Vous êtes connecté en tant que{" "}
          <span className="font-semibold">{full_name}</span>
        </p>
        <div className="flex justify-center mb-4">
          <img
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            src={avatar_url}
            alt={full_name}
          />
        </div>
        <div className="mt-6 space-y-4 w-full">
          {boards.map((board) => (
            <Link key={board.id} href={`/board/${board.id}`}>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 my-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {board.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        <FormBoard onSubmit={handleCreateBoard} />
      </div>
    </div>
  );
};

export default HomePage;