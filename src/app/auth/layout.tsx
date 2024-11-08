type Args = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: Args) {
  return (
    <main className="bg-without-navbar flex flex-col justify-center items-center">
      {children}
    </main>
  );
}
