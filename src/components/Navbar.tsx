import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { scrollToSection } from "@/lib/scroll";
import { useLanguage } from "@/hooks/use-language";

const navItems = {
  pt: [
    { label: "Home", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Grupos", id: "groups" },
    { label: "Unidades", id: "locations" },
    { label: "Galeria", id: "gallery" },
    { label: "Contato", id: "contact" },
  ],
  en: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Groups", id: "groups" },
    { label: "Locations", id: "locations" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ],
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const items = navItems[lang];

  const langToggle = (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      className="text-sm font-bold border border-border rounded-full px-3 py-1 hover:bg-primary/10 transition-colors text-foreground/70"
      aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" onClick={(e) => scrollToSection(e, "home")} className="flex items-center gap-2">
          <img src={logo} alt="BREACC Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {langToggle}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border">
          <ul className="flex flex-col p-4 gap-4">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                  onClick={(e) => {
                    scrollToSection(e, item.id);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>{langToggle}</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
