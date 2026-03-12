"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container, Button } from "@/components/ui";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="not-found bg-white">
      <Container className="not-found__container flex min-h-[60vh] items-center px-6 py-12">
        <div className="not-found__content">
          <p className="not-found__label text-sm font-medium text-primary-500">
            Błąd 404
          </p>

          <h1 className="not-found__title mt-3 text-2xl font-semibold text-neutral-950 md:text-3xl">
            Nie możemy znaleźć tej strony
          </h1>

          <p className="not-found__description mt-4 text-neutral-500">
            Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
          </p>

          <div className="not-found__buttons mt-6 flex items-center gap-x-3">
            <Button
              variant="outline"
              className="not-found__back-button flex items-center gap-x-2"
              onClick={() => router.back()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Wróć</span>
            </Button>

            <Link href="/">
              <Button variant="primary" className="not-found__home-button">
                Strona główna
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
