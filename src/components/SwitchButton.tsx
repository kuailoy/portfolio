"use client";
import { useState } from "react";

export default function SwitchButton({
  checked,
  onCheckedChange,
}: {
  checked?: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  const isOn = Boolean(checked)

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      onClick={() => onCheckedChange(!isOn)}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full
        transition-colors focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring
        ${isOn ? "bg-black dark:bg-white" : "bg-black/20 dark:bg-white/30"}
      `}
    >
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black
          transition-transform
          ${isOn ? "translate-x-5" : "translate-x-1"}
        `}
      />
    </button>
  );
}
