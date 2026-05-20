import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { getCurrentSite } from "@/lib/sites";
import { getNavLinks } from "@/lib/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ERejestracjaModal } from "@/components/e-rejestracja-modal";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.defaultTitle,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    keywords: [...site.keywords],
    authors: [{ name: site.author }],
    creator: site.author,
    openGraph: {
      type: "website",
      locale: site.locale,
      url: site.url,
      title: site.defaultTitle,
      description: site.description,
      siteName: site.name,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.defaultTitle,
      description: site.description,
      images: [site.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: site.url,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#d0422c",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getCurrentSite();
  const navLinks = getNavLinks(site);
  return (
    <html lang={site.language} className={poppins.variable}>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <Header site={site} navLinks={navLinks} />
        <main className="flex-1">{children}</main>
        <Footer site={site} navLinks={navLinks} />
        <ERejestracjaModal
          predefinedCityName={site.bookingWidget.predefinedCityName}
          predefinedCategoryId={site.bookingWidget.predefinedCategoryId}
        />
      </body>
    </html>
  );
}
