import { Newspaper } from "lucide-react";

export default function NewspaperIcon({
  className,
  width,
  height,
}: {
  className?: string;
  width?: string;
  height?: string;
}) {
  return <Newspaper className={className} width={width} height={height} />;
}
