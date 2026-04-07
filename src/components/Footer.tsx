import { Mail, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const translations = {
  pt: {
    heading: "Fale Conosco",
    subtitle: "Quer saber mais sobre o BREACC? Entre em contato ou visite nossas redes sociais.",
    workWithUsHeading: "Trabalhe conosco",
    workWithUs: {
      title: "🚨Estamos contratando!",
      checks: [
        "✅ Você gosta de trabalhar com crianças?",
        "✅ Valoriza a língua portuguesa e ama a cultura brasileira?",
        "✅ Mora em Londres e possui a documentação necessária para trabalhar no Reino Unido?",
      ],
      intro: "Então essa oportunidade é para você!",
      description:
        "O BREACC está à procura de assistentes para integrar a nossa equipe. Se você tem carinho pela educação, interesse em contribuir para a preservação da língua portuguesa e deseja fazer parte de uma comunidade acolhedora, convidamos-te a juntar-se à Família BREACC. 💚💛",
      closing: "Entre em contato conosco para saber mais!",
      emailLabel: "📧 info@breacc.com",
    },
    charity: "O BREACC é uma instituição de caridade registrada na Inglaterra e País de Gales sob o número 1087726.",
    charityLink: "Visite o site da Comissão de Instituições de Caridade",
  },
  en: {
    heading: "Get in Touch",
    subtitle: "Want to know more about BREACC? Contact us or visit our social media.",
    charity: "BREACC is a registered charity in England and Wales, number 1087726.",
    charityLink: "Visit the Charity Commission website",
  },
};

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer id="contact" className="py-16 bg-foreground">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t.heading}
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">
            {t.subtitle}
          </p>
        </div>

        {lang === "pt" && (
          <div className="max-w-3xl mx-auto mb-10 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 md:p-8">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
              {t.workWithUsHeading}
            </h3>
            <p className="text-primary-foreground text-lg font-bold mb-4">{t.workWithUs.title}</p>
            <div className="space-y-2 text-primary-foreground/90 mb-4">
              {t.workWithUs.checks.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <p className="text-primary-foreground font-semibold mb-4">{t.workWithUs.intro}</p>
            <p className="text-primary-foreground/90 leading-relaxed mb-4">{t.workWithUs.description}</p>
            <p className="text-primary-foreground mb-2">{t.workWithUs.closing}</p>
            <a
              href="mailto:info@breacc.com"
              className="inline-flex items-center font-bold text-secondary hover:underline"
            >
              {t.workWithUs.emailLabel}
            </a>
          </div>
        )}

        <div className="flex justify-center gap-6 mb-10">
          <a
            href="mailto:info@breacc.com"
            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:brightness-110 transition-all"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-primary-foreground" />
          </a>
          <a
            href="https://www.facebook.com/Breaccbook"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-accent flex items-center justify-center hover:brightness-110 transition-all"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 text-accent-foreground" />
          </a>
          <a
            href="https://www.instagram.com/breaccschool/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:brightness-110 transition-all"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-secondary-foreground" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-primary-foreground/50 text-sm max-w-2xl mx-auto leading-relaxed">
            {t.charity}{" "}
            <a
              href="http://beta.charitycommission.gov.uk/charity-details/?regid=1087726&subid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/70"
            >
              {t.charityLink}
            </a>
            .
          </p>
          <p className="text-primary-foreground/30 text-xs mt-6">
            © {new Date().getFullYear()} BREACC — Brazilian Educational and Cultural Centre
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
