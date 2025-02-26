"use client";
import React from "react";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface TeamPreviewProps {
    imgURL: string;
    name: string;
    role: string;
    github: string;
  }

function TeamPreview({ imgURL, name, role, github }: TeamPreviewProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={imgURL}
          alt=""
          height="200"
          width="200"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {name}
        </p>

        <p className="text-sm mb-4 text-neutral-600 dark:text-neutral-400">
          {role}
        </p>
        <button className="">
          <a href={github}><FaGithub /></a>
        </button>
      </BackgroundGradient>
    </div>
  );
}

export default TeamPreview; 