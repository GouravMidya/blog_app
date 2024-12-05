'use client'
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">About Page</h1>
      <Button onClick={() => alert("Should send user back to homepage!")}>
        Go Back
      </Button>
    </div>
  );
}
