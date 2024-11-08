import { CustomSVGProps } from "@/interfaces/svgprops.model";

export const HomeSVG = ({ color }: CustomSVGProps) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
        fill={color ?? "#ffffff"}
      />
    </svg>
  );
};
