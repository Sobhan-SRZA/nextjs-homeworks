import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { Board } from "@/lib/models";
import { redirect } from "next/navigation";

async function LoadDashboard(params: any) {

}

export default async function Dashboard() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/sign-in")
  }

  await connectDB();

  const baord = await Board.findOne({
    userId: session.user.id,
    name: "Job Hunt"
  });
  console.log("🚀 ~ Dashboard ~ baord:", baord)


  return (
    <div>Dashboard page</div>
  )
}
