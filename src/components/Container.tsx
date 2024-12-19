interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({
  className = "",
  children,
  id,
}) => {
  return (
    <div className={`max-width ${className}`} id={id}>
      {children}
    </div>
  );
};

export default Container;
