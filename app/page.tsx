import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl">Home</h1>
      <Button variant="outline" size="lg" className="capitalize m-4">
        Click me
      </Button>
    </main>
  );
}
