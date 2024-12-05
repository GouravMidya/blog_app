'use client'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to Next.js!</h1>
      <Button onClick={() => alert("Welcome to the Home Page!")}>
        Click Me
      </Button>
    </div>
  );
}
