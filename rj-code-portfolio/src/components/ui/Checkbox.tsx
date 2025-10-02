'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CheckboxProps {
  label: string;
  required?: boolean;
  checked?: boolean;
  name?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  showError?: boolean;
  linkText?: string;
  linkHref?: string;
}

export default function Checkbox({
  label,
  required = false,
  checked = false,
  name,
  className,
  onChange,
  error,
  showError = false,
  linkText,
  linkHref
}: CheckboxProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className={cn(
              'w-4 h-4 text-primary bg-white/10 border border-gray-700 rounded focus:ring-primary',
              className
            )}
            required={required}
            checked={checked}
            name={name}
            onChange={onChange}
            id={name}
          />
        </div>
        <label 
          htmlFor={name} 
          className="ml-2 text-sm font-medium text-gray-300 cursor-pointer"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          {linkText && linkHref && (
            <>
              {' '}
              <Link 
                href={linkHref} 
                className="text-primary hover:text-primary/80 underline transition-colors"
                target="_blank"
              >
                {linkText}
              </Link>
            </>
          )}
        </label>
      </div>
      {showError && error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
