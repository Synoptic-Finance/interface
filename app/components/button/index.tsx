import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useMemo,
} from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onPress?: MouseEventHandler<HTMLButtonElement>;
  items: ReactNode;
  isLoading?: boolean;
  width?: string | number;
  height?: string | number;
}

interface SwitchButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  onPress?: MouseEventHandler<HTMLLabelElement>;
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

export const SwitchButton = ({
  onPress,
  width,
  height,
  ...props
}: SwitchButtonProps) => {
  const checkButtonId = useMemo(() => `checkbox:${Date.now()}`, []);
  return (
    <label
      onClick={onPress}
      className="flex justify-between items-center p-3 text-sm cursor-pointer"
      htmlFor={checkButtonId}
    >
      <input
        className="hidden appearance-none peer"
        type="checkbox"
        id={checkButtonId}
        name={checkButtonId}
        {...props}
      />
      <span className="bg-[#404040]/50 w-12 h-5 rounded-full shadow-[-5px_3px_2px_0px_rgba(0,_0,_0,_0.25)_inset] flex items-center after:w-5 after:h-5 after:rounded-full after:bg-white after:duration-150 after:shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] after:ease-in-out peer-checked:after:translate-x-6 peer-checked:after:bg-[#52730d]"></span>
    </label>
  );
};
