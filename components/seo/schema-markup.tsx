import { siteConfig } from "@/lib/data";

export function SchemaMarkup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "jobTitle": siteConfig.title,
    "url": "https://jeevakk.com",
    "sameAs": [
      siteConfig.linkedin,
      siteConfig.github
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    },
    "worksFor": {
      "@type": "Organization",
      "name": siteConfig.company,
      "url": "https://zeninhive.com"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "St. Aloysius College",
      "sameAs": "https://en.wikipedia.org/wiki/St._Aloysius_College_(Autonomous),_Mangalore"
    },
    "knowsAbout": [
      "Cloud Engineering",
      "Microsoft Azure",
      "Microsoft 365 Administration",
      "AI Workflow Automation",
      "AI Agent Development",
      "WordPress Development",
      "Search Engine Optimization (SEO)",
      "Google Ads & PPC Campaign Management",
      "Meta Ads Management",
      "Theoretical Particle Physics"
    ]
  };

  return (
    <script
      suppressHydrationWarning
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
