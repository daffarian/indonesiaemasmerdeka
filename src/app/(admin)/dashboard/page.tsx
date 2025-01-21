import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";
import NewspaperIcon from "@/components/icons/NewsPaperIcon";
import CircleHelpIcon from "@/components/icons/CircleHelpIcon";
import GlobeLockIcon from "@/components/icons/GlobeLockIcon";
import UserCheckIcon from "@/components/icons/UserCheck";
import Chart from "@/components/common/data/Chart";

import Link from "next/link";

import { fetchArticleCount } from "@/lib/data/fetchArticle";
import { fetchPrivacyPolicyCount } from "@/lib/data/fetchPrivasiPolicy";
import { fetchUserTermsCount } from "@/lib/data/fetchUserTerms";
import { fetchFaqCount } from "@/lib/data/fetchFaq";
import { fetchIpToDay } from "@/lib/data/fetchIp";
import { fetchAllIp } from "@/lib/data/fetchIp";
import { fetchIpByYear } from "@/lib/data/fetchIp";

export default async function Page() {
  const articleCount = await fetchArticleCount();
  const faqCount = await fetchFaqCount();
  const privacyPolicyCount = await fetchPrivacyPolicyCount();
  const userTermsCount = await fetchUserTermsCount();
  const ipToDayCount = await fetchIpToDay();
  const totalIpCount = await fetchAllIp();
  const ipByYearCount = await fetchIpByYear();

  const article = articleCount[0].count;
  const faq = faqCount[0].count;
  const privacyPolicy = privacyPolicyCount[0].count;
  const userTerms = userTermsCount[0].count;
  const ipToDay = ipToDayCount[0].count;
  const ipTotal = totalIpCount[0].count;

  return (
    <>
      {/* Heading & Toggle Start */}
      <AdminHeading text="Dashboard" />
      {/* Heading & Toggle Stop */}
      <AdminBody>
        {/* visitor start */}
        <div>
          <div className="border rounded-xl p-5 items-center justify-center">
            <h2 className="text-slate-700 text-center">Pengunjung</h2>
            <div className="flex flex-col lg:flex-row-reverse justify-between gap-5 mt-5">
              <div className="grid grid-cols-1 gap-5 mt-5 lg:w-1/3 lg:py-10">
                <div className="flex justify-center items-center flex-col border shadow-lg rounded-xl p-5 lg:p-0">
                  <p>Hari ini</p>
                  <p className="text-5xl text-slate-700 font-bold">{ipToDay}</p>
                </div>
                <div className=" flex justify-center items-center flex-col border shadow-lg rounded-xl p-5 lg:p-0">
                  <p>Total Pengunjung</p>
                  <p className="text-5xl text-slate-700 font-bold">{ipTotal}</p>
                </div>
              </div>
              <div className="lg:w-2/3">
                <Chart className="mt-8" data={ipByYearCount} />
              </div>
            </div>
          </div>
        </div>
        {/* visitor stop */}
        <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-5 mt-10">
          {/* Article Start */}
          <Link href={"/dashboard/cerita-berbagi"}>
            <div className="p-5 border border-rose-200 rounded-xl ">
              <div className="flex flex-row justify-between items-center gap-3">
                <div className="flex flex-row gap-3 items-center">
                  <div className="p-3 rounded-full bg-rose-500">
                    <NewspaperIcon className="text-white w-6 flex" />
                  </div>
                  <h5 className="text-slate-700">Cerita Berbagi</h5>
                </div>
                <p className="font-bold text-5xl text-slate-700">{article}</p>
              </div>
            </div>
          </Link>
          {/* Article Stop */}
          {/* Faq Start */}
          <Link href={"/dashboard/faq"}>
            <div className="p-5 border border-cyan-200 rounded-xl ">
              <div className="flex flex-row justify-between items-center gap-3">
                <div className="flex flex-row gap-3 items-center">
                  <div className="p-3 rounded-full bg-cyan-500">
                    <CircleHelpIcon className="text-white" />
                  </div>
                  <h5 className="text-slate-700">FAQ</h5>
                </div>
                <p className="font-bold text-5xl text-slate-700">{faq}</p>
              </div>
            </div>
          </Link>
          {/* Faq Stop */}
          {/* Privacy Policy Start */}
          <Link href={"/dashboard/kebijakan-privasi"}>
            <div className="p-5 border border-amber-500 rounded-xl ">
              <div className="flex flex-row justify-between items-center gap-3">
                <div className="flex flex-row gap-3 items-center">
                  <div className="p-3 rounded-full bg-amber-500">
                    <GlobeLockIcon className="text-white" />
                  </div>
                  <h5 className="text-slate-700">Kebijakan Privasi</h5>
                </div>
                <p className="font-bold text-5xl text-slate-700">
                  {privacyPolicy}
                </p>
              </div>
            </div>
          </Link>
          {/* Privacy Policy Stop */}
          {/* User Terms Start */}
          <Link href={"/dashboard/syarat-pengguna"}>
            <div className="p-5 border border-emerald-500 rounded-xl ">
              <div className="flex flex-row justify-between items-center gap-3">
                <div className="flex flex-row gap-3 items-center">
                  <div className="p-3 rounded-full bg-emerald-500">
                    <UserCheckIcon className="text-white" />
                  </div>
                  <h5 className="text-slate-700">Syarat Pengguna</h5>
                </div>
                <p className="font-bold text-5xl text-slate-700">{userTerms}</p>
              </div>
            </div>
          </Link>
          {/* User Terms Stop */}
        </div>
      </AdminBody>
    </>
  );
}
