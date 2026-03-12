export const navLinks = [
  { label: "Strona główna", href: "/" },
  { label: "Leczenie alkoholizmu", href: "/leczenie-alkoholizmu-katowice" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export type NavLink = (typeof navLinks)[number];
