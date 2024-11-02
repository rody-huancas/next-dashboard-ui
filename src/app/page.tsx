"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin");
  }, [router]);

  return null;
};

export default Homepage;
