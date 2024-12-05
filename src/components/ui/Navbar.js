import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Blog App</h1>
        <div className="flex space-x-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/blog">
            Blog
          </Link>
          <Link href="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
