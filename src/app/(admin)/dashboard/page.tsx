import { fetchArticleVisible } from "@/lib/fetch/fetchVisible";
import { setArticleVisible } from "@/lib/action/setArticleVisible";

import Search from "@/components/common/Search";
import Table from "@/components/admin/article/TableArticle";
import ButtonCreate from "@/components/common/ButtonCreate";
import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";

import { fetchFilteredArticles } from "@/lib/fetch/fetchArticle";

import ToggleVisibility from "@/components/common/ToggleVisibility";
import NewspaperIcon from "@/components/icons/NewsPaperIcon";
import CircleHelpIcon from "@/components/icons/CircleHelpIcon";
import GlobeLockIcon from "@/components/icons/GlobeLockIcon";
import UserCheckIcon from "@/components/icons/UserCheck";

import { fetchArticleCount } from "@/lib/fetch/fetchArticle";

export default async function Page() {
  const [articleCount] = await fetchArticleCount();
  console.info(articleCount.count);
  return (
    <>
      {/* Heading & Toggle Start */}
      <AdminHeading text="Dashboard" />
      {/* Heading & Toggle Stop */}
      <AdminBody>
        <div className="flex flex-col lg:flex-row flex-wrap gap-5 aspect-auto">
          {/* Article Start */}
          <div className="p-5 border border-rose-200 rounded-xl ">
            <div className="flex flex-row justify-between items-center gap-3">
              <div className="flex flex-row gap-3 items-center">
                <div className="p-3 rounded-full bg-rose-500">
                  <NewspaperIcon className="text-white w-6 flex" />
                </div>
                <h5 className="text-slate-700">Cerita Berbagi</h5>
              </div>
              <p className="font-bold text-5xl text-slate-700">5</p>
            </div>
          </div>
          {/* Article Stop */}
          {/* Faq Start */}
          <div className="p-5 border border-cyan-200 rounded-xl ">
            <div className="flex flex-row justify-between items-center gap-3">
              <div className="flex flex-row gap-3 items-center">
                <div className="p-3 rounded-full bg-cyan-500">
                  <CircleHelpIcon className="text-white" />
                </div>
                <h5 className="text-slate-700">FAQ</h5>
              </div>
              <p className="font-bold text-5xl text-slate-700">11</p>
            </div>
          </div>
          {/* Faq Stop */}
          {/* Privacy Policy Start */}
          <div className="p-5 border border-amber-500 rounded-xl ">
            <div className="flex flex-row justify-between items-center gap-3">
              <div className="flex flex-row gap-3 items-center">
                <div className="p-3 rounded-full bg-amber-500">
                  <GlobeLockIcon className="text-white" />
                </div>
                <h5 className="text-slate-700">Kebijakan Privasi</h5>
              </div>
              <p className="font-bold text-5xl text-slate-700">8</p>
            </div>
          </div>
          {/* Privacy Policy Stop */}
          {/* User Terms Start */}
          <div className="p-5 border border-emerald-500 rounded-xl ">
            <div className="flex flex-row justify-between items-center gap-3">
              <div className="flex flex-row gap-3 items-center">
                <div className="p-3 rounded-full bg-emerald-500">
                  <UserCheckIcon className="text-white" />
                </div>
                <h5 className="text-slate-700">Syarat Pengguna</h5>
              </div>
              <p className="font-bold text-5xl text-slate-700">13</p>
            </div>
          </div>
          {/* User Terms Stop */}
        </div>
      </AdminBody>
    </>
  );
}
