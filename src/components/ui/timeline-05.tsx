import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Timeline — vertical step timeline (origin: shadcn timeline-05).
 * Adapted to the Syntex dark theme: ink borders/rings, white completed state,
 * display font for titles. Steps are passed in via props.
 */

export interface TimelineStep {
  title: string;
  description: string;
  completed?: boolean;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export default function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("mx-auto w-full max-w-(--breakpoint-sm)", className)}>
      <div className="relative ml-6">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-0 border-l border-ink-800" />

        {steps.map(({ title, description, completed }, index) => (
          <div className="relative pb-10 pl-10 last:pb-0" key={index}>
            {/* Timeline Icon */}
            <div
              className={cn(
                "absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-ink-700 bg-ink-900 ring-8 ring-ink-900",
                {
                  "border-white bg-white text-ink-900": completed,
                },
              )}
            >
              <span className="font-mono text-sm font-medium">
                {completed ? <Check className="h-4 w-4" /> : index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-1.5 pt-1">
              <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-white">
                {title}
              </h3>
              <p className="text-sm leading-[1.6] text-ink-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
