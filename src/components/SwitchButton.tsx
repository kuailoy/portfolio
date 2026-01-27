"use client";

import { useLayoutEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

export default function SwitchButton({
  checked,
  onCheckedChange,
}: {
  checked?: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  // Start with null to indicate "unknown" - we'll sync before paint
  const [isOn, setIsOn] = useState<boolean | null>(null);

  // useLayoutEffect runs synchronously before paint, preventing flash
  useLayoutEffect(() => {
    if (typeof checked === "boolean") {
      setIsOn(checked);
    } else {
      // Fallback: read from DOM if checked not yet provided
      setIsOn(document.documentElement.classList.contains('dark'));
    }
  }, [checked]);

  // While state is unknown, don't render the switch at all
  if (isOn === null) {
    return (
      <span
        className="inline-flex h-7 w-14 items-center rounded-full bg-foreground/20"
        aria-hidden
      />
    );
  }

  const translateClass = isOn ? "translate-x-7" : "translate-x-0.5";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label="Toggle theme"
      suppressHydrationWarning
      onClick={() => {
        const next = !isOn
        setIsOn(next)
        onCheckedChange(next)
      }}
      className={`
        relative inline-flex h-7 w-14 items-center rounded-full
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring
        cursor-pointer
        transition-all duration-500
        bg-foreground/20
      `}
    >
      <IoSunny
        className="absolute left-1.5 w-4 h-4 text-amber-500"
      />
      <IoMoon
        className="absolute right-1.5 w-4 h-4 text-blue-400"
      />
      <span
        className={`
          inline-block h-6 w-6 transform rounded-full bg-background
          transition-all duration-500 relative z-10
          shadow-md
          ${translateClass}
        `}
        suppressHydrationWarning
      />
    </button>
  );
}
