import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function UnauthPage() {
  const getSession = await auth();

  if (getSession?.user) redirect("/");

  return (
    <div className="p-20">
      <h2 className="text-6xl font-extrabold">
        You are not logged In. Please login
      </h2>
    </div>
  );
}

export default UnauthPage;
