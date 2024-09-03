"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function HireMe() {
  return (
    <div className="flex justify-center items-center ">
      <HoverBorderGradient
        containerClassName="rounded-full p-2 mb-10" // Adicione padding se necessário
        as="button"
        className="flex items-center justify-center" // Certifique-se de que o conteúdo está centralizado
      >
        <div className="flex items-center justify-center">
          <div className="min-w-[0.5rem]  min-h-[0.5rem] bg-blue-900 rounded-full animate-pulse"></div>
          <span className="text-xs ml-2">
            Available to work
          </span>
        </div>
      </HoverBorderGradient>
    </div>
  );
}
