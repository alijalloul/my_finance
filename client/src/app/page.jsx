"use client";

import { useState } from "react";

export default function Home() {
  const today = new Date();

  const type = ["Income", "Expense", "Transfer"];
  const account = [
    { name: "CASH (LBP)", currecy: "LBP" },
    { name: "CASH (USD)", currecy: "$" },
    { name: "BYBLOS (USD)", currecy: "$" },
    { name: "WISE (USD)", currecy: "$" },
    { name: "WISE (EURO)", currecy: "€" },
    { name: "UPWORK (USD)", currecy: "$" },
  ];

  const [ledger, setLedger] = useState([
    {
      type: null,
      account: null,
      amount: null,
      fees: null,
      desc: null,
    },
  ]);

  return (
    <div className="w-full h-screen flex justify-center items-center p-16">
      <div className="w-full h-full flex flex-col space-y-8">
        <h1 className="text-3xl font-semibold">
          Today is: {today.toLocaleDateString()}
        </h1>

        <div className="flex-1 w-full border border-red-500"></div>
      </div>
    </div>
  );
}
