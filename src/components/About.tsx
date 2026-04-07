import { BookOpen, Users, Heart, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const icons = [BookOpen, Users, Heart, Globe];

const translations = {
  pt: {
    heading: "Sobre o BREACC",
    description: "O BREACC é uma instituição de caridade registrada na Inglaterra (nº 1087726) dedicada à educação e cultura brasileira para crianças e jovens.",
    features: [
      { title: "Ensino de Português", desc: "Aulas semanais que desenvolvem a leitura, escrita e comunicação em português." },
      { title: "Comunidade", desc: "Um espaço de convivência para famílias brasileiras e lusófonas no Reino Unido." },
      { title: "Cultura Viva", desc: "Celebrações, música, dança e tradições que mantêm a cultura brasileira viva." },
      { title: "Identidade Bilíngue", desc: "Ajudamos crianças a desenvolverem uma identidade bicultural forte e orgulhosa." },
    ],
  },
  en: {
    heading: "About BREACC",
    description: "BREACC is a registered charity in England (no. 1087726) dedicated to Brazilian education and culture for children and young people.",
    features: [
      { title: "Portuguese Teaching", desc: "Weekly classes developing reading, writing and communication in Portuguese." },
      { title: "Community", desc: "A welcoming space for Brazilian and Lusophone families in the United Kingdom." },
      { title: "Living Culture", desc: "Celebrations, music, dance and traditions that keep Brazilian culture alive." },
      { title: "Bilingual Identity", desc: "We help children develop a strong and proud bicultural identity." },
    ],
  },
};

const About = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((f, i) => {
            const Icon = icons[i];
            return (
              <div
                key={f.title}
                className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
