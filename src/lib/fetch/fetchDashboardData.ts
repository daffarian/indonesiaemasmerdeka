"use server";

import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";

import { fetchArticleCount } from "./fetchArticle";
import { fetchFaqCount } from "./fetchFaq";
import { fetchPrivacyPolicyCount } from "./fetchPrivasiPolicy";
import { fetchUserTermsCount } from "./fetchUserTerms";

export async function fetchDashboardCardData() {
  noStore();
  try {
    const articleCount = db.query(`SELECT COUNT(*) AS count FROM article`);
    const faqCount = db.query(`SELECT COUNT(*) AS count FROM faq`);
    const privacyPolicyCount = db.query(
      `SELECT COUNT(*) AS count FROM privacy_policy`
    );
    const userTermsCount = db.query(`SELECT COUNT(*) AS count FROM user_terms`);

    const data = await Promise.all([
      articleCount,
      faqCount,
      privacyPolicyCount,
      userTermsCount,
    ]);

    const article = data[0][0][0].count;
    const faq = data[1][0][0].count;
    const privacyPolicy = data[2][0][0].count;
    const userTerms = data[3][0][0].count;

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
