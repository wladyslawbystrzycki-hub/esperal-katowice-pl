"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

const CONTAINER_ID = "ng-calendar-widget-cmp76nm3";
const BASE_URL = "https://e-rejestracja24.pl";
const SCRIPT_SRC = `${BASE_URL}/api/embed/widget`;
const STYLES_HREF = `${BASE_URL}/api/embed/styles`;

declare global {
  interface Window {
    NGCalendar?: {
      createWidget: (config: Record<string, unknown>) => void;
    };
  }
}

const widgetConfig = {
  containerId: CONTAINER_ID,
  theme: "light",
  primaryColor: "#d0422c",
  baseUrl: BASE_URL,
  predefinedCategoryId: "cmf17dr4o000eooi83sdz7ja5",
  predefinedCityName: "Katowice",
  redirectBrandSlug: "",
  disableRedirects: false,
  enableAutoSearch: false,
};

const WIDGET_THEME_CSS = `
#${CONTAINER_ID},
#${CONTAINER_ID} .ng-calendar-widget {
  --primary-color: #d0422c;
  --primary: #d0422c;
  --primary-rgb: 208, 66, 44;
  --primary-hover: #e45640;
  --primary-light: rgba(208, 66, 44, 0.5);
  --primary-dark: #bc2e18;
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --text-light: #90a4ae;
  --border: #dee2e6;
  --border-focus: #d0422c;
}
`;

export function ERejestracjaModal() {
  const [open, setOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const initializedRef = useRef(false);

  const init = useCallback(() => {
    if (initializedRef.current) return;
    if (!window.NGCalendar?.createWidget) return;
    if (!document.getElementById(CONTAINER_ID)) return;
    window.NGCalendar.createWidget(widgetConfig);
    initializedRef.current = true;
  }, []);

  useEffect(() => {
    if (open && scriptLoaded) init();
  }, [open, scriptLoaded, init]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest<HTMLAnchorElement>(
        'a[href="#e-rejestracja"]'
      );
      if (!anchor) return;
      event.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {scriptLoaded === false && open && (
        <Script
          src={SCRIPT_SRC}
          strategy="afterInteractive"
          onLoad={() => setScriptLoaded(true)}
          onError={() => setScriptLoaded(true)}
        />
      )}
      {open && (
        <>
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: WIDGET_THEME_CSS }}
          />
          <link rel="stylesheet" href={STYLES_HREF} precedence="default" />
        </>
      )}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Rejestracja online"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-2 md:p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="relative w-full max-w-[1600px] rounded-xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Zamknij"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>

            <div className="max-h-[96vh] overflow-y-auto p-6 md:p-10">
              <h2 className="text-2xl font-semibold text-neutral-950">
                E-rejestracja
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Umów wizytę online — wybierz usługę i dogodny termin.
              </p>

              <div
                id={CONTAINER_ID}
                className="mt-6 min-h-[600px]"
                suppressHydrationWarning
              >
                {!scriptLoaded && (
                  <div className="flex items-center justify-center py-10 text-neutral-500">
                    Ładowanie formularza rejestracji…
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
