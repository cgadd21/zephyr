type HeaderProps = {
  title: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <h1 className="[&amp;::selection]:text-base-content [&amp;::selection]:bg-blue-700/20 relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text pb-6 text-center text-2xl font-bold [-webkit-text-fill-color:transparent] sm:text-3xl md:text-4xl lg:text-5xl [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
      {props.title}
    </h1>
  );
};
