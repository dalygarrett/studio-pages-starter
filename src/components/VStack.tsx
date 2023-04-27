export interface VStackProps {
  children: React.ReactNode;
}

const VStack = ({ children }: VStackProps) => {
  return <div className="lg:self-end">{children}</div>;
};

export default VStack;
