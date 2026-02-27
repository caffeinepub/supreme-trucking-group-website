import { useEffect } from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Class A CDL Team Driver – OTR Refrigerated",
  "description": "Supreme Trucking is hiring Class A CDL TEAM OTR drivers for refrigerated routes nationwide. Up to $0.65 CPM, 3,000 miles guaranteed per week, 100% no-touch freight.",
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
  "qualifications": "Valid Class A CDL required. Must meet DOT requirements. Clean driving record. Verifiable experience for higher pay tiers.",
  "responsibilities": "Operate commercial refrigerated vehicles OTR as a team driver. Handle 100% no-touch loads. Maintain compliance with DOT regulations. Achieve guaranteed 3,000 miles per week.",
  "skills": "CDL-A, OTR driving, refrigerated transport, team driving",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-201-838-0000",
    "contactType": "Human Resources"
  }
};

interface SectionProps {
  emoji: string;
  title: string;
  children: React.ReactNode;
}

function Section({ emoji, title, children }: SectionProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
        <span>{emoji}</span>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-muted-foreground">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CareersPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "jobposting-schema";
    script.text = JSON.stringify(jobPostingSchema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("jobposting-schema");
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              🚛 Class A CDL Team Driver – OTR Refrigerated
            </h1>
            <p className="text-lg md:text-xl font-semibold text-primary mb-3">
              Up to $0.65 CPM | 3,000 Miles Guaranteed | No-Touch Freight
            </p>
            <p className="text-muted-foreground text-base md:text-lg">
              Supreme Trucking is hiring Class A CDL TEAM OTR drivers for refrigerated routes nationwide.
            </p>
          </div>

          {/* Pay Structure */}
          <Section emoji="💰" title="Pay Structure">
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Experienced Drivers</h3>
                <BulletList items={[
                  "2+ years verifiable experience: Starting at $0.65 CPM",
                  "1.5+ years verifiable experience: Starting at $0.60 CPM",
                ]} />
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-semibold text-foreground mb-2">Entry-Level Drivers</h3>
                <BulletList items={[
                  "25,000-mile paid training program",
                  "$100 per day during training",
                  "After training: Starting at $0.45 CPM",
                ]} />
              </div>
            </div>
          </Section>

          {/* Mileage Guarantee */}
          <Section emoji="🔥" title="Mileage Guarantee">
            <BulletList items={[
              "Guaranteed 3,000 miles per week",
              "Guarantee applies when drivers stay out a minimum of 2 full consecutive weeks",
              "Consistent, steady freight",
            ]} />
          </Section>

          {/* Position Details */}
          <Section emoji="🚚" title="Position Details">
            <BulletList items={[
              "OTR – Team Driving",
              "Refrigerated Freight",
              "100% No-Touch Loads",
              "Steady Year-Round Work",
            ]} />
          </Section>

          {/* Requirements */}
          <Section emoji="📋" title="Requirements">
            <BulletList items={[
              "Valid Class A CDL",
              "Must meet DOT requirements",
              "Clean driving record",
              "Verifiable experience for higher pay tiers",
            ]} />
          </Section>

          {/* Apply Today */}
          <Section emoji="📞" title="Apply Today">
            <div className="space-y-4">
              <a
                href="tel:+12018380000"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Call</p>
                  <p className="font-semibold">(201) 838-0000 ext. 1</p>
                </div>
              </a>

              <a
                href="sms:+19083005400"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Text</p>
                  <p className="font-semibold">(908) 300-5400</p>
                </div>
              </a>

              <a
                href="mailto:recruiting@supremeltl.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Email</p>
                  <p className="font-semibold">recruiting@supremeltl.com</p>
                </div>
              </a>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}
