export const StandardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full py-4 px-8 bg-[#212121] rounded-lg">{children}</div>
  );
};
