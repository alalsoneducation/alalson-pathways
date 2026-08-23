export function PageHeader({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string | undefined;
  eyebrow?: string | undefined;
}) {
  return (
    <section className="bg-brand-gradient text-primary-foreground">
      <div className="container-page py-12 lg:py-16">
        {eyebrow ? (
          <p className="mb-2 text-sm font-bold text-primary-foreground/75">{eyebrow}</p>
        ) : null}
        <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
        {subtitle ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
