type Props = {
  title: string;
  subtitle?: string;
  comics: string[];
  route: string;
  fn: () => void;
};

export const HorizontalContainer = (props: Props) => {
  return (
    <section className="w-full">
      <div className="w-full">
        {props.title && <h3>{props.title}</h3>}
        {props.subtitle && <p>{props.subtitle}</p>}
      </div>
      <div className="flex gap-4 w-full mt-6 overflow-x-scroll">
        {props.comics.map((elem) => )}
      </div>
    </section>
  );
};
