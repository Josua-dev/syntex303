import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  reverse?: boolean;
};

export function LogoCloud({ className, logos, reverse = true, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} reverse={reverse} duration={80} durationOnHover={250}>
        {logos.map((logo) => {
          const img = (
            <img
              alt={logo.alt}
              className={cn(
                "h-8 w-[120px] object-contain select-none",
                !logo.href && "pointer-events-none"
              )}
              height={logo.height || "auto"}
              loading="lazy"
              src={logo.src}
              width={logo.width || "auto"}
            />
          );
          return logo.href ? (
            <a
              key={`logo-${logo.alt}`}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={logo.alt}
              className="flex h-10 w-[140px] shrink-0 items-center justify-center"
            >
              {img}
            </a>
          ) : (
            <span
              key={`logo-${logo.alt}`}
              className="flex h-10 w-[140px] shrink-0 items-center justify-center"
            >
              {img}
            </span>
          );
        })}
      </InfiniteSlider>
    </div>
  );
}
