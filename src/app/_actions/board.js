"use server";
import { revalidatePath } from 'next/cache';
import { createClient } from '../_lib/supabase/server';

export const createBoard = async ({formdata}) => {
  const supabase = await createClient();
    console.log(formdata);
  const { data, error } = await supabase.from('boards').insert([
    { title },
  ]);

  if (error) {
    console.error(error);
  }
  console.log(data);
//   revalidatePath('/');
};