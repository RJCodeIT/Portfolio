"use client";

import React, { memo, useMemo } from "react";
import { cn } from "@/lib/utils";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value?: string;
  name?: string;
  className?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function InputComponent({
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  name,
  className,
  onChange,
}: InputProps) {
  const isTextArea = type === "textarea";

  // Decide input type only once per render
  const ComponentTag = useMemo(
    () => (isTextArea ? "textarea" : "input"),
    [isTextArea]
  );

  // Memoized label
  const labelContent = useMemo(() => {
    return (
      <>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </>
    );
  }, [label, required]);

  // Memoized classes
  const inputClasses = useMemo(
    () =>
      cn(
        "w-full px-4 py-2 bg-white/10 border border-gray-700 rounded-md text-gray-100",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        "placeholder-gray-500",
        isTextArea ? "min-h-[120px] resize-none" : "h-10",
        className
      ),
    [className, isTextArea]
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium text-gray-300">{labelContent}</label>

      <div className="relative">
        <ComponentTag
          className={inputClasses}
          placeholder={placeholder}
          type={!isTextArea ? type : undefined}
          required={required}
          value={value}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default memo(InputComponent);
