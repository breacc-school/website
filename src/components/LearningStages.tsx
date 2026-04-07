import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/use-language";

const groupMeta = [
  { emoji: "🌱", color: "bg-primary/10" },
  { emoji: "🎵", color: "bg-secondary/30" },
  { emoji: "🐊", color: "bg-accent/10" },
  { emoji: "🌵", color: "bg-primary/10" },
  { emoji: "🌿", color: "bg-secondary/30" },
  { emoji: "🌾", color: "bg-accent/10" },
];

const translations = {
  pt: {
    heading: "Estágios de Aprendizagem",
    subtitle: "Seis estágios distintos que desenvolvem habilidades sociais, motoras e linguísticas de formas variadas.",
    cta: "Fale Conosco",
    gcseCard: {
      title: "Curso Preparatório Online para o GCSE",
      intro: "O português é mais do que uma disciplina extracurricular: é herança, história e família.",
      description:
        "No BREACC, reconhecemos a importância de fortalecer essa conexão. Por isso, oferecemos um Curso Preparatório online para o exame GCSE de Português. 📚🇧🇷",
      highlights: [
        "Professores especializados",
        "Conteúdo focado no exame",
        "Grupos reduzidos",
        "Aulas 100% online",
      ],
      closing:
        "Nosso objetivo vai além da aprovação: queremos fortalecer a confiança e o orgulho de ser bilíngue. Junte-se a nós para transformar a fluência em português em uma certificação de peso que celebra suas raízes.",
    },
    groups: [
      {
        name: "Turma Jardim",
        age: "2 a 3 anos",
        description: "As crianças de 2 a 3 anos desenvolvem competências de socialização e interação em Língua Portuguesa, através das cantigas, brincadeiras e repertórios folclóricos. Este é um grupo especial, uma vez que os pais participam ativamente das atividades, passando assim aos seus filhos toda a sua vivência, história e herança de forma lúdica e prazerosa. Desta forma, as crianças aprendem desde cedo o amor à nossa cultura, como ponto de partida para o aprendizado do POLH.",
      },
      {
        name: "Cante e Brinque",
        age: "4 a 5 anos",
        description: "As crianças com idade entre 4 e 5 aprendem as cantigas e brincadeiras tradicionais da cultura brasileira. O ensino se desenvolve de maneira lúdica, sem enfoque ortográfico, haja vista que a alfabetização é um fenômeno único e as crianças já estão sendo ou serão alfabetizadas no ensino básico britânico. Com bastante interação, as crianças são estimuladas a trabalhar de forma independente e em grupo.",
      },
      {
        name: "Turma Pantanal",
        age: "6 a 7 anos",
        description: "Com idades compreendidas entre os 6 e 7 anos, o grupo Pantanal oferece às crianças, através de jogos e brincadeiras, a possibilidade de desenvolvimento de suas competências de oralidade, escrita e compreensão. Com atividades diversificadas de pesquisas e projetos os alunos são levados a evoluir em suas habilidades de leitura e escrita.",
      },
      {
        name: "Turma Sertão",
        age: "8 a 9 anos",
        description: "Crianças de 8 a 9 anos são encorajadas a aprofundar suas habilidades linguísticas de oralidade e escrita no grupo Sertão. Com diversidade metodológica, utilizando sempre a ludicidade como ponto de partida, esses alunos progridem em suas competências comunicativas, sempre utilizando a língua portuguesa como fio condutor.",
      },
      {
        name: "Turma Amazônia",
        age: "10 a 12 anos",
        description: "Dos 10 aos 12 anos, esse grupo expande a habilidade de comunicação oral da criança e enfoca vários aspectos da expressão em Língua Portuguesa. A criança é exposta a músicas, jogos e textos gradualmente mais complexos e começa a desenvolver maior apreciação pelo uso da língua. As atividades em grupo visam a interação entre as crianças e a troca efetiva de experiências.",
      },
      {
        name: "Turma Cerrado",
        age: "a partir de 13 anos",
        description: "Se utiliza de atividades pedagógicas para consolidar habilidades gramaticais, literárias, lúdicas e numéricas baseadas nas necessidades dos jovens. Com adolescentes a partir de 13 anos de idade, esse grupo oferece grande apoio àqueles que querem se preparar para o Certificado de Estudos Gerais Secundários (GCSE) em português. Os alunos são motivados a escreverem de forma mais acadêmica, expressando suas opiniões e fazendo releituras de obras literárias e artísticas.",
      },
    ],
  },
  en: {
    heading: "Learning Stages",
    subtitle: "Six distinct stages developing social, motor and language skills in varied ways.",
    cta: "Get in Touch",
    groups: [
      {
        name: "Turma Jardim",
        age: "Ages 2–3",
        description: "Children aged 2 to 3 develop socialisation and interaction skills in Portuguese through songs, games and folk traditions. This is a special group where parents actively take part in the activities, passing on their experiences, history and heritage in a playful and enjoyable way. From an early age, children learn to love our culture as a starting point for learning Portuguese as a Heritage Language (POLH).",
      },
      {
        name: "Cante e Brinque",
        age: "Ages 4–5",
        description: "Children aged 4 and 5 learn traditional Brazilian songs and games. Teaching takes a playful approach without a focus on spelling, since literacy is a unique process and the children are already being or will be taught to read and write in British primary schools. With plenty of interaction, children are encouraged to work both independently and in groups.",
      },
      {
        name: "Turma Pantanal",
        age: "Ages 6–7",
        description: "For children aged 6 and 7, the Pantanal group offers the chance to develop speaking, writing and comprehension skills through games and play. With varied activities including research and projects, pupils are guided to progress in their reading and writing abilities.",
      },
      {
        name: "Turma Sertão",
        age: "Ages 8–9",
        description: "Children aged 8 and 9 are encouraged to deepen their spoken and written language skills in the Sertão group. Using a variety of methods and always starting from a playful approach, these pupils progress in their communication skills, with Portuguese as the common thread throughout.",
      },
      {
        name: "Turma Amazônia",
        age: "Ages 10–12",
        description: "For ages 10 to 12, this group expands children's oral communication skills and focuses on various aspects of expression in Portuguese. Children are exposed to increasingly complex songs, games and texts and begin to develop a greater appreciation for using the language. Group activities aim to encourage interaction and a meaningful exchange of experiences.",
      },
      {
        name: "Turma Cerrado",
        age: "Ages 13+",
        description: "This group uses educational activities to consolidate grammar, literary, creative and numeracy skills based on the needs of young people. For teenagers aged 13 and above, it offers strong support for those who wish to prepare for the General Certificate of Secondary Education (GCSE) in Portuguese. Pupils are motivated to write more academically, expressing their opinions and reinterpreting literary and artistic works.",
      },
    ],
  },
};

const LearningStages = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="groups" className="py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {lang === "pt" && (
          <div className="max-w-4xl mx-auto mb-10 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.gcseCard.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.gcseCard.intro}</p>
            <p className="text-muted-foreground leading-relaxed mb-5">{t.gcseCard.description}</p>

            <div className="space-y-2 mb-5">
              {t.gcseCard.highlights.map((item) => (
                <p key={item} className="text-foreground font-medium">
                  • {item}
                </p>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">{t.gcseCard.closing}</p>
          </div>
        )}

        <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.groups.map((g, i) => (
            <AccordionItem
              key={g.name}
              value={g.name}
              className={`${groupMeta[i].color} rounded-xl border border-border hover:shadow-lg transition-all duration-300`}
            >
              <AccordionTrigger className="px-8 pt-8 pb-4 hover:no-underline">
                <div className="text-left">
                  <span className="text-5xl mb-4 block">{groupMeta[i].emoji}</span>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                    {g.name}
                  </h3>
                  <p className="text-muted-foreground font-semibold">{g.age}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="text-muted-foreground leading-relaxed">{g.description}</p>
                <a
                  href="mailto:info@breacc.com"
                  className="inline-flex items-center mt-4 text-sm font-bold text-primary hover:underline"
                >
                  {t.cta} →
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default LearningStages;
