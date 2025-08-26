import { tryGetUserId } from "@/utils";
// import { redirect } from "next/navigation";

export default async function Home() {

  const userId = await tryGetUserId()

  // Remove this as the updated Middleware will handle this now
  // if (userId) {
  //   redirect('/product-models');
  // }
  //
  return (
    <div className="flex justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Reproduction</h1>
      </main>
    </div>
  );
}
