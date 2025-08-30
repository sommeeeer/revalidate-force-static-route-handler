import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  revalidatePath("/force-static")
  return Response.json({status: "ok"})
}
