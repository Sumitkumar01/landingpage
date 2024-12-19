interface SectionProps {
  className?: string;
  lgpy?: number;
  py?: number;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, lgpy, py, children }) => {
  return (
    <section
      className={`max-w-[1920px] mx-auto w-full ${lgpy ? `lg:py-${lgpy}` : "lg:py-10"} ${py ? `py-${py}` : "py-5"} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
