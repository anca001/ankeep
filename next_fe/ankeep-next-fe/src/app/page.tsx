"use client";

// import Image from "next/image";
import Search from "../components/SearchBar";
// import { useState } from "react";

export default function Home() {
  // const [query, setQuery] = useState<string>("");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Search query={query} setQuery={setQuery} /> */}
      <Search />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
    </div>
  );
}
