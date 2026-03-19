const groups = [
  { name: "Turma Jardim", age: "2 a 3 anos", emoji: "🌱", color: "bg-primary/10" },
  { name: "Cante e Brinque", age: "4 a 5 anos", emoji: "🎵", color: "bg-secondary/30" },
  { name: "Turma Pantanal", age: "6 a 7 anos", emoji: "🐊", color: "bg-accent/10" },
  { name: "Turma Sertão", age: "8 a 9 anos", emoji: "🌵", color: "bg-primary/10" },
  { name: "Turma Amazônia", age: "10 a 12 anos", emoji: "🌿", color: "bg-secondary/30" },
  { name: "Turma Cerrado", age: "à partir de 13 anos", emoji: "🌾", color: "bg-accent/10" },
];

const LearningStages = () => {
  return (
    <section id="grupos" className="py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Estágios de Aprendizagem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seis estágios distintos que desenvolvem habilidades sociais, motoras e linguísticas de formas variadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div
              key={g.name}
              className={`${g.color} rounded-xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
            >
              <span className="text-5xl mb-4 block">{g.emoji}</span>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {g.name}
              </h3>
              <p className="text-muted-foreground font-semibold">{g.age}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningStages;
