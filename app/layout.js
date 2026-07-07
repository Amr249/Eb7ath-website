import "../styles.css";
import "./site-styles.css";
import "./admin/globals.css";
import "lenis/dist/lenis.css";
import { IMAGES } from "@/lib/assets";
import { SmoothScroll } from "@/components/site/SmoothScroll.jsx";

export const metadata = {
  title: "إِبحَث | البحث الطبي",
  description: "إِبحَث تربط الأطباء السعوديين بفرق بحثية نشطة ودعم أكاديمي لتطوير مسيرتهم المهنية.",
  icons: {
    icon: IMAGES.siteIcon,
    apple: IMAGES.siteIcon,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
