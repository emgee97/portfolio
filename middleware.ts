import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Countries where French is an official or primary language
const FRENCH_COUNTRIES = new Set([
  "FR", "BE", "CH", "LU", "MC", "MA", "DZ", "TN",
  "SN", "CI", "CM", "CD", "CG", "MG", "ML", "BF",
  "NE", "TD", "GA", "GN", "BJ", "TG", "RW", "BI",
  "DJ", "KM", "MU", "HT", "GQ", "VU", "PF", "NC",
]);

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Only auto-detect if the user hasn't manually set a preference
  if (!request.cookies.get("lang")) {
    // Vercel automatically provides the visitor's country in this header
    const country = request.headers.get("x-vercel-ip-country") ?? "";
    const lang = FRENCH_COUNTRIES.has(country) ? "fr" : "en";
    response.cookies.set("lang", lang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
