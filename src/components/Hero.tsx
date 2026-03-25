import heroBg from "@/assets/carnaval_1.JPG";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Crianças brasileiras dançando em evento cultural"
          className="w-full h-full object-cover object-[60%_center] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-6 animate-fade-in-up">
          Bem-vindos ao BREACC
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 font-body opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Brazilian Educational and Cultural Centre — Preservando a língua e cultura brasileira no Reino Unido desde 1998.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#grupos"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all shadow-lg"
          >
            Conheça nossos grupos
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-bold text-lg hover:brightness-110 transition-all shadow-lg"
          >
            Agende uma visita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
