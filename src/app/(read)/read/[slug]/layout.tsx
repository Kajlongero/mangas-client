import { ReadingHeader } from "@/core/comics/components/ComicRead/Header";

export default async function ReadComicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReadingHeader />
      <main className="flex flex-col pt-8">{children}</main>
    </>
  );
}
