interface ChildProps {
  name: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = ({ name, onClick, children }: ChildProps) => (
  <div>
    <p>Hello, {name}</p>
    <button onClick={onClick}>Click</button>
    {children}
  </div>
);

export const ChildAsFC: React.FC<ChildProps> = ({
  name,
  onClick,
  children,
}) => (
  <div>
    <p>Hi, {name}</p>
    <button onClick={onClick}>Click</button>
    {children}
  </div>
);
