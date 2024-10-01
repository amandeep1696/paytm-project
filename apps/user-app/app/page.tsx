'use client';
// import { PrismaClient } from '@repo/db/client';
import { useBalance } from '@repo/store/hooks/useBalance';

// const client = new PrismaClient();

export default function Home() {
  const balance = useBalance();
  return <div className="text-2xl">hi there {balance}</div>;
}
