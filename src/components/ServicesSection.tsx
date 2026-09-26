import { BrainCircuit, Server, Workflow, Sparkles, Code2, Database } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: BrainCircuit,
      title: "IA Avancée & Intégration LLM",
      badge: "DeepSeek R1 Expert",
      description: "Conception, optimisation hardware et intégration d'architectures d'IA modernes (LLMs, RAG, agents autonomes). Lauréat national en optimisation PC pour DeepSeek R1.",
      tags: ["DeepSeek R1", "PyTorch", "Hugging Face", "Ollama", "RAG"]
    },
    {
      icon: Server,
      title: "Backend & Architectures Robustes",
      badge: "Codexa.ma",
      description: "Développement d'APIs REST & GraphQL scalables, microservices haute performance, gestion de bases de données et sécurisation de flux transactionnels.",
      tags: ["FastAPI", "Python", "Node.js", "PostgreSQL", "Redis", "Docker"]
    },
    {
      icon: Workflow,
      title: "Automatisation de Processus IA",
      badge: "Recrutement & RH",
      description: "Développement de pipelines automatisés de recrutement, analyse sémantique de CV, présélection prédictive des talents et gain de temps massif pour équipes RH.",
      tags: ["CV Parsing", "Machine Learning", "NLP", "Automation Web"]
    },
    {
      icon: Code2,
      title: "Plateformes SaaS & Web Apps",
      badge: "Startup Founder",
      description: "Création de produits numériques complets de A à Z avec interfaces soignées, réactivité fluide et architectures pérennes (comme la startup 3alem o t3alem).",
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Cloud Run", "UI/UX"]
    }
  ];

  return (
    <section id="services" className="w-full py-20 sm:py-28 bg-[#0b0e17] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#5c60e6]/20 text-[#818cf8] border border-[#5c60e6]/30 inline-block mb-3">
            Services &amp; Expertises
          </span>
          <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide">
            SOLUTIONS IA &amp; INGÉNIERIE SUR MESURE
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            De la modélisation d&apos;intelligence artificielle au déploiement d&apos;infrastructures backend résilientes pour propulser vos projets vers le succès.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-3xl bg-[#121624] border border-white/10 hover:border-[#5c60e6]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[#5c60e6]/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#5c60e6]/15 border border-[#5c60e6]/30 flex items-center justify-center text-[#818cf8] group-hover:bg-[#5c60e6] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider bg-white/5 border border-white/10 text-zinc-300">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#818cf8] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {srv.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/5 text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
