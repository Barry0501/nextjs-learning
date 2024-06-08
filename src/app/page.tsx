import { Button } from "@nextui-org/button";
import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <Link href="/dashboard">
            <h2 className="mb-3 text-2xl font-semibold">
              Dashboard{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Next.js features and API.
            </p>
          </Link>
          <Button>Press me</Button>
        </div>
      </main>
    </NextUIProvider>
  );
}
