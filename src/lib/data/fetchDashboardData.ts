import { UserTerms } from "../../types/UserTerms";
("use server");

import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";

import { fetchArticleCount } from "./fetchArticle";
import { fetchFaqCount } from "./fetchFaq";
import { fetchPrivacyPolicyCount } from "./fetchPrivasiPolicy";
import { fetchUserTermsCount } from "./fetchUserTerms";

interface Count {
  count: number;
}

export async function fetchDashboardCardData() {
  try {
    const articleCount = await fetchArticleCount();
    const faqCount = await fetchFaqCount();
    const privacyPolicyCount = await fetchPrivacyPolicyCount();
    const userTermsCount = await fetchUserTermsCount();

    const article = articleCount[0].count;
    const faq = faqCount[0].count;
    const privacyPolicy = privacyPolicyCount[0].count;
    const userTerms = userTermsCount[0].count;
    return {
      article,
      faq,
      privacyPolicy,
      userTerms,
    };
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch privacy policy count.");
  }
}
