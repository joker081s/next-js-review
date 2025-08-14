"use server";
import Logo from "./(components)/Logo";
import Review from "./(components)/Review";
import { getReviews } from "./(services)/services";
import { Suspense } from "react";

export default async function Home() {
  const reviews = await getReviews();

  return (
    <div className="flex flex-col gap-10 items-center py-20 w-screen bg-gray-100 h-screen overflow-y-hidden overflow-x-auto relative">
      <Logo />
      <div className="">
        <h1 className="text-4xl sm:text-5xl font-extrabold  text-blue-900 text-center drop-shadow-sm tracking-tight">
          Google Reviews
        </h1>
        <Suspense fallback={<p> loading...</p>}>
          <Review reviews={reviews} />
        </Suspense>
      </div>
    </div>
  );
}
