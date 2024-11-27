// components/Button.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
        {children}
      </a>
    </Link>
  );
};

export default Button;