import Image from "next/image";
import { createClient } from "./_lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("application");
  } else {
    return redirect("/auth/login");
  }
}
