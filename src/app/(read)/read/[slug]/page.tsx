import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    [key: string]: string;
  };
  params: {
    slug: string;
  };
};

export default async function ReadComicPage(props: Props) {
  const { slug } = await props.params;

  if (slug) {
    redirect(`/read/${slug}/paginated`);
  }

  return <></>;
}
