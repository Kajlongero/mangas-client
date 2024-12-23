type Props = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: Props) {
  return (
    <section className="flex flex-col justify-center items-center">
      <section className="background-image-custom fixed object-cover top-0 w-full h-screen blur-[2px]"></section>
      {children}
    </section>
  );
}
