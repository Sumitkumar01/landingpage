import Container from "./Container";
import Section from "./Section";

interface SectionWithContainerProps {
  sectionId?: string;
  containerId?: string;
  sectionClassName?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

const SectionWithContainer: React.FC<SectionWithContainerProps> = ({
  sectionId = "",
  containerId = "",
  sectionClassName = "",
  containerClassName = "",
  children,
}) => {
  return (
    <Section id={sectionId} className={sectionClassName}>
      <Container id={containerId} className={containerClassName}>
        {children}
      </Container>
    </Section>
  );
};

export default SectionWithContainer;
