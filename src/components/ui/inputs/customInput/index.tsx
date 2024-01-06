import { cva } from "class-variance-authority";
import { cn } from "@/utils/helper";
import { EyeOutlined } from "@ant-design/icons";
import { IInput } from "@/types/general";

const InputVariants = cva(
  `px-3 py-2 rounded-xl transition-all hover:ring-2 ring-indigo-300 hover:text-white`,
  {
    variants: {
      variant: {
        outlined: "border-gray-300 border-4",
      },
      size: {
        sm: "py-2 px-2",
        md: "px-4 py-2",
        lg: "py-3 px-6",
      },
      fullWidth: {
        true: "w-full",
      },
      isIcon: {
        true: "bg-lemon-100",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        className: "uppercase rounded-md",
      },
    ],
    defaultVariants: {
      size: "sm",
      fullWidth: true,
      variant: "outlined",
    },
  }
);

export const CustomInput = ({
  size,
  className,
  fullWidth,
  LabelText,
  isPassword,
  variant,
  onBlur,
  onChange,
  ...props
}: IInput) => {
  return (
    <div>
      <label htmlFor="">{LabelText}</label>
      <div>
        {isPassword && (
          <div>
            <EyeOutlined />
          </div>
        )}
        <input
          type="button"
          onBlur={onBlur}
          onChange={onChange}
          className={cn(
            InputVariants({
              className,
              size,
              fullWidth,
              variant,
            })
          )}
          {...props}
        />
      </div>
    </div>
  );
};
