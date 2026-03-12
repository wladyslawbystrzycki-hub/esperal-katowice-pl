interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function createLocalBusinessSchema({
  name,
  description,
  url,
  phone,
  email,
  address,
}: {
  name: string;
  description: string;
  url: string;
  phone?: string;
  email?: string;
  address?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    url,
    ...(phone && { telephone: phone }),
    ...(email && { email }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        postalCode: address.postalCode,
        addressCountry: address.country,
      },
    }),
  };
}

export function createWebsiteSchema({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
  };
}
