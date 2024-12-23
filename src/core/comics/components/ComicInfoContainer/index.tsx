export const ComicInfoContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="relative flex gap-6 max-sm:flex-col max-sm:items-center mt-4">
      {children}
    </section>
  );
};
