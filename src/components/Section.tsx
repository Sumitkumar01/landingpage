interface SectionProps {
  className?: string;
  lgpy?: number;
  py?: number;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({
  className = "",
  lgpy,
  py,
  id,
  children,
}) => {
  return (
    <section
      className={`max-w-[1920px] mx-auto w-full ${lgpy ? `lg:py-${lgpy}` : "lg:py-10"} ${py ? `py-${py}` : "py-5"} ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
