export default function ButtonLogout({
  children,
  className,
  onClick,
}: {
  children?:string;
  className?: string;
  onClick?: any;
}) {
  return (
    <button
      className="block text-base w-full text-wrap bg-red-500 p-2 rounded-lg text-white text-center font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
