type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export function SyntexLogo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <img
      src="/syntex-logo.png"
      alt="Syntex Technologies"
      className={className}
      style={{
        filter: variant === 'light' ? 'brightness(0.85)' : 'none',
      }}
    />
  );
}
