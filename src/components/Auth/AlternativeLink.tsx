import React from 'react';
import { cn } from '@/lib/utils';

interface AlternativeLinkProps {
  text?: string;
  linkText?: string;
  href?: string;
  className?: string;
}

const AlternativeLink: React.FC<AlternativeLinkProps> = ({
  text = 'or,',
  linkText = 'sign up',
  href = '#',
  className,
}) => {
  return (
    <p className={cn('text-sm text-center text-muted-foreground', className)}>
      {text}{' '}
      <a
        href={href}
        className="font-medium underline text-primary hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
      >
        {linkText}
      </a>
    </p>
  );
};

export default AlternativeLink;
