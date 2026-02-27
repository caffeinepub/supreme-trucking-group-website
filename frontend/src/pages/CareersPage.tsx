const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "CDL-A Truck Driver",
  "description": "Supreme Trucking Group is seeking experienced CDL-A Truck Drivers for OTR, local delivery, team driving, and refrigerated transport routes. Join a company that puts compliance and temperature integrity first. Competitive pay, modern equipment, and 24/7 dispatch support.",
  "datePosted": "2026-01-01",
  "validThrough": "2026-12-31T23:59:59",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Supreme Trucking Group",
    "sameAs": "https://www.supremeltl.com",
    "logo": "https://www.supremeltl.com/assets/generated/supreme-trucking-logo-corrected-transparent.dim_300x150.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "22 Van Veghten Dr",
      "addressLocality": "Bridgewater",
      "addressRegion": "NJ",
      "postalCode": "08807",
      "addressCountry": "US"
    }
  },
  "applicantLocationRequirements": {
    "@type": "Country",
    "name": "United States"
  },
  "jobLocationType": "TELECOMMUTE",
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": {
      "@type": "QuantitativeValue",
      "unitText": "YEAR"
    }
  },
  "industry": "Trucking and Freight Transportation",
  "occupationalCategory": "53-3032.00",
  "qualifications": "Valid CDL-A license required. Clean driving record. Experience with refrigerated transport preferred.",
  "responsibilities": "Operate commercial vehicles for OTR, local delivery, team driving, and refrigerated transport. Maintain FSMA 204 compliance records. Ensure cargo temperature integrity throughout transit.",
  "skills": "CDL-A, OTR driving, refrigerated transport, FSMA compliance, team driving",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-201-838-0000",
    "contactType": "Human Resources"
  }
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Careers
          </h1>

          <div className="bg-muted/50 border border-border rounded-lg p-8 md:p-12">
            <p className="text-lg text-muted-foreground text-center">
              Career opportunities and job listings will be added here soon. Check back later for exciting opportunities to join the Supreme Trucking Group team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
