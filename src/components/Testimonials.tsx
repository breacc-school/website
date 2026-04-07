import { Music4, Quote } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const testimonials = [
  {
    text: "Somos eternamente gratos pelo trabalho que o Breacc desenvolve com os nossos filhos. Nossa filha aprendeu a ler e escrever no Breacc. É um resgate emocional e cultural para nós pais.",
    author: "Michelle Lopes",
  },
  {
    text: "Uma escola super bacana, cujo objetivo é transmitir a nossa cultura e a nossa língua para as crianças de uma maneira lúdica e envolvente!",
    author: "Cris Doca",
  },
  {
    text: "Mais do que uma escola, é uma família.",
    author: "Geovanna Ce",
  },
  {
    text: "É muito bom poder compartilhar a cultura Brasileira com os meus filhos, e o Breacc nos ajuda a manter essa cultura viva nas nossas crianças que nasceram fora do Brasil.",
    author: "Sahmylle Peixe",
  },
  {
    text: "Excelente iniciativa, assim conservamos nossa cultura e língua! É gratificante saber que estas iniciativas estejam sendo aplicadas com tanto amor e dedicação!",
    author: "Ruayda Rabah",
  },
];

const translations = {
  pt: {
    heading: "Galeria",
    subtitle: "Momentos especiais e vozes da comunidade BREACC",
    playlistTitle: "Playlist BREACC",
    playlistDescription: "Uma seleção musical para manter viva a conexão com a língua e a cultura brasileira.",
    playlistCta: "Ouvir playlist",
  },
  en: {
    heading: "Gallery",
    subtitle: "Special moments and voices from the BREACC community",
    playlistTitle: "BREACC Playlist",
    playlistDescription: "A music selection to keep a strong connection with Brazilian language and culture.",
    playlistCta: "Listen to playlist",
  },
};

const playlistUrl = "https://open.spotify.com/";

const Testimonials = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="gallery" className="py-24 bg-primary">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-primary-foreground/80">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20">
            <div className="flex items-center gap-3 mb-4">
              <Music4 className="w-8 h-8 text-secondary" />
              <h3 className="font-heading text-2xl font-bold text-primary-foreground">{t.playlistTitle}</h3>
            </div>
            <p className="text-primary-foreground/85 leading-relaxed mb-6">{t.playlistDescription}</p>
            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground font-bold px-5 py-3 hover:brightness-110 transition-all"
            >
              {t.playlistCta}
            </a>
          </div>

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20"
            >
              <Quote className="w-8 h-8 text-secondary mb-4" />
              <p className="text-primary-foreground/90 mb-6 leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="text-secondary font-bold text-sm">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
