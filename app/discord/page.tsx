"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Discord = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the specified URL
    router.push("https://discord.com/users/1404797147441922048");
  }, [router]);

  return null;
};

export default Discord;
