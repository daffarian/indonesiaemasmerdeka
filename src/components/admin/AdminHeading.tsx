export default function AdminHeading({
  className,
  text,
  children,
}: {
  className?: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="shadow-lg p-5 rounded-lg bg-white flex flex-row items-center justify-between">
      <h1 className="text-2xl lg:text-3xl text-primary">{text}</h1>
      {children}
    </div>
  );
}
