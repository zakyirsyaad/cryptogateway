"use client";
import React from "react";
import { ConnectButtonCustom } from "@/components/ConnectButtonCustom";
import { useAccount } from "wagmi";
import ProfileMenu from "@/components/ProfileMenu";
import useGetBusinessByUser from "@/hooks/getBusinessbyUser";
export default function Header() {
  const { business } = useGetBusinessByUser();
  const { address } = useAccount();
  if (!address) {
    return null;
  }
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Freex</h1>
      </div>
      <div className="flex items-center gap-5">
        {business?.id && <ProfileMenu />}
        <ConnectButtonCustom />
      </div>
    </header>
  );
}
