import { MapPin, Clock, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const locationData = [
  {
    address: "Anglo Continental School, 29-35 Wimborne RD, Bournemouth BH2 6NA",
    facebook: "https://www.facebook.com/breaccbournemouth",
  },
  {
    address: "Waldegrave School, Fifth Cross Rd, Twickenham, London TW2 5LH",
    facebook: "https://www.facebook.com/breaccbook",
  },
];

const translations = {
  pt: {
    heading: "Nossas Unidades",
    locations: [
      { name: "Unidade Bournemouth", schedule: "Sábados, das 10:00 às 12:00" },
      { name: "Unidade Twickenham / Richmond", schedule: "Sábados, das 10:30 às 12:30" },
    ],
  },
  en: {
    heading: "Our Locations",
    locations: [
      { name: "Bournemouth Branch", schedule: "Saturdays, 10:00 to 12:00" },
      { name: "Twickenham / Richmond Branch", schedule: "Saturdays, 10:30 to 12:30" },
    ],
  },
};

const Locations = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.locations.map((loc, i) => (
            <div
              key={loc.name}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">{loc.name}</h3>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-muted-foreground text-sm">{locationData[i].address}</p>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <p className="text-muted-foreground text-sm">{loc.schedule}</p>
              </div>
              <a
                href={locationData[i].facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" /> Facebook
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
