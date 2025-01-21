import IgIcon from "../icons/IgIcon";
import InIcon from "../icons/InIcon";

export default function ({ className }: { className?: string }) {
  return (
    <div className={`${className} flex flex-row gap-3`}>
      {/* Ig */}
      <a href="https://www.instagram.com/yayasan_indonesiaemasmerdeka?igsh=MTN0dnI1NGtvOW0yMQ==" target="_blank">
        <div className="bg-primary flex items-center justify-center rounded-lg w-8 h-8 p-1">
          <IgIcon className="" />
        </div>
      </a>
      {/* Linkedin */}
      <a href="https://www.linkedin.com/in/yayasan-indonesia-emas-merdeka-1a727b256/" target="_blank">
        <div className="bg-primary flex items-center justify-center rounded-lg w-8 h-8 p-2">
          <InIcon className="" />
        </div>
      </a>
    </div>
  );
}
