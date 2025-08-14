function ButtonClick({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}) {
  return (
    <button
      className="px-6 py-2 text-white text-lg font-semibold bg-blue-800 hover:bg-blue-900 border-2 border-blue-800 rounded-lg transition-all duration-200 shadow-md active:scale-95"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonClick;
