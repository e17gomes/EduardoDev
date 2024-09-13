interface typeButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string; // Torne className opcional e use string com inicial minúscula
  }


const Button = ({className, children,...props}:typeButton) => {
    <button
    className={`p-2 m-auto w-4/6 border rounded-md ${className}`}
    {...props}
    >
    {children}
    </button>
}

export default Button
