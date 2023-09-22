import { useUsernameContext } from "@/contexts/UsernameContext";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { username, changeUsername } = useUsernameContext();
  // console.log(username);
  // useEffect(() => {
  //   changeUsername('Aung Aung');
  // }, [])
  // console.log(username);
  return (
    <div>
      <h1 className="text-lg font-bold">Home page</h1>
      <div>
        <Link href="/login">Go to Login Page</Link>
        <Link href="/about">Go to About Page</Link>
        <Link href="/contact">Go to Contact Page</Link>
      </div>
    </div>
  );
}
