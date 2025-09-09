"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import NewspaperIcon from "@/components/icons/NewsPaperIcon";
import LayoutDashboardIcon from "@/components/icons/LayoutDashboardIcon";
import CircleHelpIcon from "@/components/icons/CircleHelpIcon";
import GlobeLockIcon from "@/components/icons/GlobeLockIcon";
import UserCheckIcon from "@/components/icons/UserCheck";

export default function DesktopNavAdmin({
  className,
}: {
  className?: string;
  isArticleVisible?: number;
}) {
  return (
    <nav className="hidden lg:block h-svh !w-72 pt-24">
      <div className="flex flex-col justify-between h-full p-2">
        <div>
          {/* Dashboard Start */}
          <Link
            href={"/dashboard"}
            className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
          >
            <LayoutDashboardIcon className="text-primary" />
            Dashboard
          </Link>
          {/* Dashboard Stop */}
          {/* History Start */}
          <Link
            href={"/dashboard/cerita-berbagi"}
            className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
          >
            <NewspaperIcon className="text-primary w-6" />
            Impact Stories
          </Link>
          {/* History Stop */}
          {/* Faq Start */}
          <Link
            href={"/dashboard/faq"}
            className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
          >
            <CircleHelpIcon className="text-primary" />
            Faq
          </Link>
          {/* Faq Stop */}
          {/* Privacy Policy Start */}
          <Link
            href={"/dashboard/kebijakan-privasi"}
            className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
          >
            <GlobeLockIcon className="text-primary" />
            Kebijakan Privasi
          </Link>
          {/* Privacy Policy Stop */}
          {/* User Terms Start */}
          <Link
            href={"/dashboard/syarat-pengguna"}
            className="hover:text-primary flex flex-row gap-3 hover:bg-zinc-100 px-3 py-3 rounded-lg text-zinc-600 text-base font-medium mt-3"
          >
            <UserCheckIcon className="text-primary" />
            Syarat Pengguna
          </Link>
          {/* User Terms Stop */}
        </div>
      </div>
    </nav>
  );
}
