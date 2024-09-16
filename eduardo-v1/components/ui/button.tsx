type typeButton = {
  className?: string;
  children: React.ReactNode;
  // outros props que o botão pode ter
};

const Button = ({ className, children, ...props }: typeButton) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
