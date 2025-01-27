'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value?: string;
  name?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function Input({
  label,
  placeholder,
  type = 'text',
  required = false,
  value,
  name,
  className,
  onChange,
}: InputProps) {
  const isTextArea = type === 'textarea';
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <InputComponent
          className={cn(
            'w-full px-4 py-2 bg-white/10 border border-gray-700 rounded-md text-gray-100',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            'placeholder-gray-500',
            isTextArea ? 'min-h-[120px] resize-none' : 'h-10',
            className
          )}
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
