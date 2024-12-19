interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  className = "",
  children,
  id = "",
  style = {},
}) => {
  return (
    <div className={`max-width ${className}`} id={id} style={style}>
      {children}
    </div>
  );
};

export default Container;
