import "./load-env.mjs";
import { createArticle } from "../lib/cms/blogRepository.js";

await createArticle({
  readMinutes: 6,
  status: "published",
  coverImageUrl: "/assets/images/Research-consultations-img.png",
  locales: {
    ar: {
      title: "مقالة تجريبية",
      excerpt: "هذه مقالة أولية للتأكد من عمل نظام إدارة المدونة.",
      content: "يمكنك تعديل هذه المقالة أو حذفها من لوحة الإدارة.",
    },
    en: {
      title: "Seed article",
      excerpt: "Initial article to confirm the blog CMS works.",
      content: "You can edit or delete this article from the admin panel.",
    },
  },
});

console.log("Seed article created.");
