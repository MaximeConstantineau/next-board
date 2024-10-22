import { createClient } from "@/app/_lib/supabase/server";
import React from "react";

const boardPage = async ({ params }) => {
  const supabase = await createClient();
  const {id} = await params;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: boardData, error } = await supabase
    .from("boards")
    .select("*")
    .eq("id", id)
    .single();
  const { data: commentsData } = await supabase
    .from("comments")
    .select("*")
    .eq("board_id", id);
  console.log(boardData);
  console.log(commentsData);
  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
          {boardData.title ? boardData.title : "No Title Available"}
        </h1>
        <div className="space-y-4">
          {commentsData && commentsData.length > 0 ? (
            commentsData.map((comment) => (
              <div
                key={comment.id}
                className="p-4 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition duration-300"
              >
                <p className="text-gray-800">
                  {comment.text ? comment.text : "No Comment Text Available"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No Comments Available</p>
          )}
          <form action="">
            <textarea
              className="w-full p-4 border rounded-lg shadow-md"
              name="comment"
              id="comment"
              placeholder="Write a comment..."
            ></textarea>
            <button className="w-full bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default boardPage;
