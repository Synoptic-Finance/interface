import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onPress?: MouseEventHandler<HTMLButtonElement>;
  items: ReactNode;
  isLoading?: boolean;
  width?: string | number;
  height?: string | number;
}

export const CTAGreen = ({
  items,
  onPress,
  width,
  height,
  isLoading,
  style,
  ...props
}: CustomButtonProps) => (
  <button
    className="flex justify-center items-center gap-2 border-0 outline-0 w-full h-full px-2 py-2 text-[#fff] bg-[#52730d] rounded-[7px] text-[0.8em] font-inter"
    onClick={onPress}
    style={{ width, height, ...(style ?? {}) }}
    {...props}
  >
    {items}
  </button>
);
