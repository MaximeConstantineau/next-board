"use server";
import { revalidatePath } from "next/cache";
import { createClient } from "../_lib/supabase/server";

export const createBoard = async (formdata) => {
  const supabase = await createClient();
  const title = formdata.get("title");

  const { data, error } = await supabase
    .from("boards")
    .insert([{ title: title }]);

  if (error) {
    console.error(error);
  }

  console.log(data);
  revalidatePath('/');
};

export const createComment = async ({ formdata }) => {
  const supabase = await createClient();
  const { comment, board_id } = formdata;
  const { data, error } = await supabase.from("comments").insert([
    { text: comment, board_id },
  ]);
  if (error) {
    console.error(error);
  }
  console.log(data);
  revalidatePath("/");
};