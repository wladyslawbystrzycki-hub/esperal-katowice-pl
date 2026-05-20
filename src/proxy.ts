import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PROXY_SITE_HEADER, resolveSiteByHost, sitesByKey } from "@/lib/sites";

const CITY_PREFIXED_PATTERNS = [
  /^\/leczenie-alkoholizmu-([a-z]+)$/,
  /^\/esperal-([a-z]+)$/,
];

const KNOWN_CITY_SLUGS = new Set(
  Object.values(sitesByKey).map((s) => s.citySlug)
);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host");
  const site = resolveSiteByHost(host);
  const pathname = request.nextUrl.pathname;

  for (const pattern of CITY_PREFIXED_PATTERNS) {
    const cityMatch = pathname.match(pattern);
    if (cityMatch) {
      const slugCity = cityMatch[1];
      if (KNOWN_CITY_SLUGS.has(slugCity) && slugCity !== site.citySlug) {
        const notFoundUrl = new URL("/404-cross-city", request.url);
        return NextResponse.rewrite(notFoundUrl);
      }
      break;
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(PROXY_SITE_HEADER, site.key);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|images|icon-|apple-icon|.*\\.(?:png|jpg|jpeg|svg|webp|avif|ico|gif)$).*)",
  ],
};
