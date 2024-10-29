import { createComment } from "@/app/_actions/board";
import WhiteBoard from "@/app/_componnents/WhiteBoard";
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
    WhiteBoard({commentsData, boardData, createComment, id})
  );
};

export default boardPage;
