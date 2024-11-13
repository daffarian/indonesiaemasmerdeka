export default function AdminBody({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-5 shadow-lg rounded-lg bg-white p-5">{children}</div>
  );
}
