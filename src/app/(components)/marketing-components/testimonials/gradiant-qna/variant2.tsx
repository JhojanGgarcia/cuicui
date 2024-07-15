import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { cn } from "#/src/utils/cn";

export default function GradientQnAVariant2() {
  return (
    <div className="">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
      "
      >
        <AdvancedGradiant className="opacity-50" />
      </div>
      <div className=" space-y-2">
        <Testimonial
          title="What is the best thing about this product?"
          content="The best thing about this product is that it is very easy to use and it is very user-friendly. It is also very affordable and it is very easy to set up."
        />
        <Testimonial
          title="What is the best thing about this product?"
          content="The best thing about this product is that it is very easy to use and it is very user-friendly. It is also very affordable and it is very easy to set up."
        />
        <Testimonial
          title="What is the best thing about this product?"
          content="The best thing about this product is that it is very easy to use and it is very user-friendly. It is also very affordable and it is very easy to set up."
        />
      </div>
    </div>
  );
}

const Testimonial = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="bg-neutral-500/10 rounded-3xl overflow-hidden has-[:open]:bg-neutral-500/60 relative backdrop-blur-2xl">
      <details className="p-4 peer group max-h-96 overflow-hidden transition-all duration-500 w-full open:pt-8 open:pl-8">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
          <h6 className="text-lg tracking-tight text-neutral-600 dark:text-neutral-300 font-medium">
            {title}
          </h6>
          <ChevronDownIcon className="size-5 group-open:-rotate-180 transition-all absolute top-5 right-5  text-neutral-600 dark:text-neutral-300" />
        </summary>
      </details>

      <div className="peer-open:max-h-40 max-h-0 overflow-hidden transition-all duration-500 text-neutral-700 dark:text-neutral-200 font-medium">
        <p className="p-8 rounded-2xl ">{content}</p>
      </div>
    </div>
  );
};

const AdvancedGradiant = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <>
      <style>
        {`
          @keyframes size-bounce {
            50% { transform: scale(0.8); }
            100% { transform: scale(1); }
          }
          @keyframes spin-right {
            100% { transform: rotate(360deg); }
          }
          @keyframes spin-left {
            100% { transform: rotate(-360deg); }
          }
        `}
      </style>
      <div className={cn("size-[400px] relative transition-all", className)}>
        <div className="absolute top-0 left-0 grid place-items-center w-full h-full">
          <div
            className={cn("w-full h-full blur-3xl opacity-80 rounded-full")}
            style={{
              background:
                "conic-gradient(#FF0080, #EE00FF, #00A6FF, #4797FF, #0044FF, #FF8000, #FF00CC)",
              animation: "spin-right 15s linear infinite",
            }}
          />
        </div>
        <div
          className="absolute top-0 left-0 grid place-items-center w-full h-full"
          style={{
            animation: "size-bounce 20s linear infinite",
          }}
        >
          <div
            className={cn("size-[300px] absolute blur-2xl rounded-full")}
            style={{
              background: "conic-gradient(#FFF, #12B4E6, #DC4CFC)",
              animation: "spin-right 10s linear infinite",
            }}
          />
        </div>
        <div
          className="absolute top-0 left-0 grid place-items-center w-full h-full"
          style={{
            animation: "size-bounce 10s linear infinite",
          }}
        >
          <div
            className={cn(
              "size-[300px] absolute blur-2xl rounded-full opacity-80",
            )}
            style={{
              background: "conic-gradient(#A6EFFF, #12ADE6, #4C63FC)",
              animation: "spin-left 15s linear infinite",
            }}
          />
        </div>
      </div>
    </>
  );
};
