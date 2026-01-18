"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const aspectRatioVariants = {
  square: 1,
  landscape: 16 / 9,
  portrait: 3 / 4,
  wide: 21 / 9,
  ultrawide: 32 / 9,
};

type AspectRatioVariant = keyof typeof aspectRatioVariants;

interface AspectRatioProps extends React.ComponentProps<
  typeof AspectRatioPrimitive.Root
> {
  variant?: AspectRatioVariant;
}

function AspectRatio({ variant, ratio, ...props }: AspectRatioProps) {
  const finalRatio =
    ratio ?? (variant ? aspectRatioVariants[variant] : undefined);

  return (
    <AspectRatioPrimitive.Root
      data-slot="aspect-ratio"
      ratio={finalRatio}
      {...props}
    />
  );
}

export { AspectRatio };
