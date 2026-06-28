export function asset(path) {
  return `/assets/${path}`;
}

export const SITE_NAME = "إِبحَث";
export const SITE_NAME_EN = "Eb7ath";

export const IMAGES = {
  logoEn: asset("logo/English-Logo.png"),
  logoAr: asset("logo/ArabicLogo.png"),
  logoHeaderAr: asset("logo/Header-Logo-arabic.png"),
  logoHeaderEn: asset("logo/Header-Logo-english.png"),
  siteIcon: asset("logo/Site-Icon.png"),
  logo: asset("logo/ArabicLogo.png"),
  homeHero: asset("images/HeroImg1.png"),
  homeHero2: asset("images/HeroImg2.png"),
  homeHero3: asset("images/HeroImg3.png"),
  homeFeatures0: asset("images/home-features-list-section-0.jpg"),
  homeFeatures1: asset("images/home-features-list-section-1.jpg"),
  ssrService: asset("images/SSRservice-Img.png"),
  homeAbout: asset("images/home-about-section.jpg"),
  vmvSection: asset("images/VMVsection-Img.png"),
  homeStats0: asset("images/home-stats-section-0.jpg"),
  homeStats1: asset("images/home-stats-section-1.jpg"),
  servicesFeature: asset("images/services-feature-section.jpg"),
  homeResearch0: asset("images/home-research-0.jpg"),
  homeResearch1: asset("images/home-research-1.jpg"),
  homeResearch2: asset("images/home-research-2.jpg"),
  mentorFatima: asset("images/womenDoctor.avif"),
  mentorMohammed: asset("images/Docotr1.jpg"),
  mentorKhalid: asset("images/Docotr12.jpg"),
  testiMan1: asset("images/testomonials/man1.jpg"),
  testiMan2: asset("images/testomonials/man2.jpg"),
  testiMan3: asset("images/testomonials/man3.jpg"),
  testiMan4: asset("images/testomonials/man4.avif"),
  testiMan5: asset("images/testomonials/man5.webp"),
  testiWomen1: asset("images/testomonials/women1.webp"),
  testiWomen2: asset("images/testomonials/women2.webp"),
  testiWomen3: asset("images/testomonials/women3.webp"),
  testiWomen4: asset("images/testomonials/women4.avif"),
  ctaLanding: asset("images/CTAImg.png"),
  aboutCta: asset("images/about-cta-section.jpg"),
  blogNewsletter: asset("images/blog-newsletter-section.jpg"),
};

export const SOCIAL_LINKS = [
  { icon: "instagram", href: "https://instagram.com/", label: "Instagram" },
  { icon: "tiktok", href: "https://tiktok.com/", label: "TikTok" },
  { icon: "linkedin", href: "https://linkedin.com/", label: "LinkedIn" },
];

export const navFooter = {
  en: {
    nav: { home: "Home", about: "About us", blog: "Blog", start: "Start" },
    footer: {
      copyright: "© 2025 Eb7ath. All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of service",
      cookies: "Cookies settings",
    },
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", blog: "المدونة", start: "ابدأ" },
    footer: {
      copyright: "© 2025 إِبحَث. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      cookies: "إعدادات الكوكيز",
    },
  },
};
