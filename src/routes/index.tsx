import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Sparkles, Volume2, Cog, Hand, Box, ArrowRight, Download,
  AlertTriangle, School, Coins, BookOpen, Brain, CheckCircle2,
  Mail, MapPin, Phone, Cpu, Wrench, Code2, Layers, X, Play,
  ShoppingCart, User,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList,
} from "recharts";
import fotoTheo from "@/assets/fototheo.jpeg.asset.json";
import fotoThiago from "@/assets/fotothiago.jpeg.asset.json";
import fotoRafael from "@/assets/fotorafael.jpeg.asset.json";
import caixaFechada from "@/assets/ecotatil-caixa-fechada.png.asset.json";
import caixaAberta from "@/assets/ecotatil-caixa-aberta.png.asset.json";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

// ---------------- Braille map (Unified Braille, PT) ----------------
// Dot numbering (2 cols x 3 rows):
//   1 4
//   2 5
//   3 6
const BRAILLE: Record<string, number[]> = {
  A: [1], B: [1, 2], C: [1, 4], D: [1, 4, 5], E: [1, 5],
  F: [1, 2, 4], G: [1, 2, 4, 5], H: [1, 2, 5], I: [2, 4], J: [2, 4, 5],
  K: [1, 3], L: [1, 2, 3], M: [1, 3, 4], N: [1, 3, 4, 5], O: [1, 3, 5],
  P: [1, 2, 3, 4], Q: [1, 2, 3, 4, 5], R: [1, 2, 3, 5], S: [2, 3, 4], T: [2, 3, 4, 5],
  U: [1, 3, 6], V: [1, 2, 3, 6], W: [2, 4, 5, 6], X: [1, 3, 4, 6], Y: [1, 3, 4, 5, 6], Z: [1, 3, 5, 6],
  Á: [1, 2, 3, 5, 6], É: [2, 3, 4, 6], Í: [3, 4], Ó: [3, 4, 6], Ú: [2, 3, 4, 5, 6],
  Ã: [3, 4, 5], Õ: [2, 4, 6], Ç: [1, 2, 3, 4, 6],
  " ": [],
};

function dotsFor(ch: string): number[] {
  const up = ch.toUpperCase();
  return BRAILLE[up] ?? [];
}

// ---------------- Nav ----------------
function Nav() {
  const links = [
    { href: "#problema", label: "O Problema" },
    { href: "#solucao", label: "A Solução" },
    { href: "#produto", label: "O Produto" },
    { href: "#simulador", label: "Simulador" },
    { href: "#equipe", label: "Equipe" },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-tactile text-navy-deep shadow-lg shadow-tactile/30">
            <span className="grid grid-cols-2 gap-[3px]">
              {[1,2,3,4,5,6].map(i => (
                <span key={i} className={`h-1.5 w-1.5 rounded-full ${[1,2,4,5].includes(i) ? "bg-navy-deep" : "bg-navy-deep/30"}`} />
              ))}
            </span>
          </span>
          <span className="text-white font-display text-xl font-semibold tracking-tight">Jumpers</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#vendas" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-tactile text-navy-deep px-4 py-2 text-sm font-semibold shadow-lg shadow-tactile/30 hover:brightness-105 transition">
          <ShoppingCart className="h-4 w-4" /> Comprar EcoTátil
        </a>
      </div>
    </header>
  );
}

// ---------------- Hero ----------------
function Hero() {
  return (
    <section id="top" className="relative hero-gradient overflow-hidden">
      <Nav />
      <div className="mx-auto max-w-7xl px-6 pt-40 pb-28 md:pt-48 md:pb-36 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-tactile" />
            Tecnologia assistiva • Open Hardware
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] text-balance-tight">
            EcoTátil: a tecnologia que dá <span className="text-tactile">voz</span> e <span className="text-tactile">relevo</span> à alfabetização infantil.
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-xl">
            Uma célula Braille eletrônica interativa e de baixo custo, projetada para transformar o aprendizado de crianças com deficiência visual — por apenas <strong className="text-white">R$ 497,00</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#vendas" className="inline-flex items-center gap-2 rounded-full bg-tactile text-navy-deep px-6 py-3 text-sm font-semibold shadow-xl shadow-tactile/30 hover:brightness-105 transition">
              <ShoppingCart className="h-4 w-4" /> Comprar EcoTátil
            </a>
            <a href="#simulador" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:bg-white/15 transition">
              <Play className="h-4 w-4" /> Conheça o Simulador
            </a>
            <a href="#instalar" className="inline-flex items-center gap-2 rounded-full bg-white text-navy-deep px-6 py-3 text-sm font-semibold hover:bg-tactile-soft transition">
              <Download className="h-4 w-4" /> Instalar Software
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "R$ 497", v: "Custo unitário" },
              { k: "97%", v: "Mais barato que o mercado" },
              { k: "6 pinos", v: "Célula Braille ampliada" },
            ].map(s => (
              <div key={s.k}>
                <dt className="text-2xl font-display font-semibold text-white">{s.k}</dt>
                <dd className="text-xs text-white/60 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-5">
          <HeroDevice />
        </div>
      </div>
    </section>
  );
}

function HeroDevice() {
  // Rotating letter demo
  const letters = ["J","U","M","P","E","R","S"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % letters.length), 1400);
    return () => clearInterval(t);
  }, []);
  const active = dotsFor(letters[i]);
  return (
    <div className="relative float-slow">
      <div className="absolute -inset-8 bg-tactile/20 blur-3xl rounded-full" aria-hidden />
      <div className="relative rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6 text-white/70 text-xs uppercase tracking-widest">
          <span>EcoTátil</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-tactile animate-pulse" /> Ativo</span>
        </div>
        <BrailleCell dots={active} large />
        <div className="mt-6 text-center">
          <div className="font-display text-6xl text-white">{letters[i]}</div>
          <div className="text-xs text-white/50 mt-1">Sincronizando áudio + relevo</div>
        </div>
      </div>
    </div>
  );
}

// ---------------- Braille Cell component ----------------
function BrailleCell({
  dots, large = false, onToggle,
}: { dots: number[]; large?: boolean; onToggle?: (d: number) => void }) {
  const size = large ? "h-16 w-16" : "h-12 w-12";
  const order = [1, 4, 2, 5, 3, 6]; // grid order (row by row)
  return (
    <div className={`mx-auto grid grid-cols-2 gap-4 ${large ? "w-fit p-6" : "w-fit p-4"} rounded-2xl bg-white/5 border border-white/10`}>
      {order.map(n => {
        const active = dots.includes(n);
        const clickable = !!onToggle;
        return (
          <button
            key={n}
            type="button"
            onClick={() => onToggle?.(n)}
            aria-label={`Pino ${n} ${active ? "ativo" : "inativo"}`}
            aria-pressed={active}
            disabled={!clickable}
            className={[
              size,
              "relative rounded-full transition-all duration-200",
              clickable ? "cursor-pointer" : "cursor-default",
              active
                ? "bg-tactile pin-pop shadow-[0_10px_20px_-6px_rgba(120,200,120,0.7),inset_0_-4px_10px_rgba(0,0,0,0.25),inset_0_3px_8px_rgba(255,255,255,0.5)]"
                : "bg-white/10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5),inset_0_-1px_2px_rgba(255,255,255,0.05)]",
            ].join(" ")}
          >
            <span className={`absolute inset-0 rounded-full ring-1 ${active ? "ring-tactile/40" : "ring-white/5"}`} />
            <span className={`absolute inset-1 rounded-full ${active ? "bg-gradient-to-br from-white/40 to-transparent" : ""}`} />
          </button>
        );
      })}
    </div>
  );
}

// ---------------- Problem section ----------------
function Problem() {
  const stats = [
    { icon: School, k: "1 milhão+", v: "crianças com deficiência visual no Brasil ainda enfrentam barreiras educacionais graves." },
    { icon: Coins, k: "R$ 15.000+", v: "é o preço médio de uma linha Braille comercial importada — proibitivo para escolas públicas." },
    { icon: AlertTriangle, k: "< 5%", v: "das salas de aula públicas possuem qualquer recurso didático tátil interativo." },
  ];
  return (
    <section id="problema" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-tactile text-sm font-semibold uppercase tracking-widest">O Problema</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy-deep text-balance-tight">
            Alfabetizar em Braille virou um privilégio. Isso precisa mudar.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            O custo proibitivo das linhas Braille comerciais e a escassez de recursos didáticos interativos excluem milhares de crianças da leitura, da escrita e do direito à educação plena.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {stats.map(({ icon: Icon, k, v }) => (
            <div key={k} className="group rounded-2xl border border-border bg-card p-8 hover:border-tactile transition-colors">
              <div className="h-11 w-11 rounded-xl bg-tactile-soft/60 flex items-center justify-center text-navy-deep">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-3xl text-navy-deep font-semibold">{k}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Solution section ----------------
function Solution() {
  const features = [
    { icon: Cog, title: "Transdução Mecânica Avançada", desc: "Ativação física de pontos por micro servomotores silenciosos, com resposta tátil precisa." },
    { icon: Volume2, title: "Feedback Sonoro Sincronizado", desc: "Saída em áudio de alta qualidade para associação imediata entre a letra falada e o relevo tátil." },
    { icon: Hand, title: "Interface Física Robusta", desc: "Teclado mecânico integrado que incentiva coordenação motora, autonomia e exploração." },
    { icon: Box, title: "Gabinete Ergonômico", desc: "Design seguro impresso em 3D, confortável para mãozinhas em desenvolvimento." },
  ];
  return (
    <section id="solucao" className="py-28 bg-secondary/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-tactile text-sm font-semibold uppercase tracking-widest">A Solução</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy-deep text-balance-tight">
            EcoTátil — Braille eletrônico, acessível e feito para aprender.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Cada componente foi pensado para reduzir custo sem comprometer a experiência pedagógica. Um dispositivo, quatro pilares.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-card p-6 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-11 w-11 rounded-xl bg-navy text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-navy-deep text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Simulator ----------------
function Simulator() {
  const [text, setText] = useState("A");
  const [manualDots, setManualDots] = useState<number[]>([]);
  const [manualMode, setManualMode] = useState(false);
  const lastSpoken = useRef<string>("");

  const currentChar = (text.slice(-1) || "").toUpperCase();
  const activeDots = manualMode ? manualDots : dotsFor(currentChar);

  // Speak when char changes
  useEffect(() => {
    if (manualMode) return;
    if (!currentChar || currentChar === " ") return;
    if (currentChar === lastSpoken.current) return;
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(currentChar);
      u.lang = "pt-BR";
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
      lastSpoken.current = currentChar;
    } catch { /* ignore */ }
  }, [currentChar, manualMode]);

  const toggleManual = (d: number) => {
    setManualMode(true);
    setManualDots(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d].sort());
  };

  const manualChar = useMemo(() => {
    const sorted = [...manualDots].sort().join(",");
    const found = Object.entries(BRAILLE).find(([, v]) => [...v].sort().join(",") === sorted);
    return found?.[0] ?? "—";
  }, [manualDots]);

  const speakManual = () => {
    if (manualChar === "—" || manualChar === " ") return;
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(manualChar);
    u.lang = "pt-BR";
    window.speechSynthesis.speak(u);
  };

  return (
    <section id="simulador" className="py-28 bg-navy-deep text-white relative overflow-hidden">
      <div aria-hidden className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-tactile/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-navy/40 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="max-w-2xl">
          <p className="text-tactile text-sm font-semibold uppercase tracking-widest">Simulador Interativo</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-balance-tight">
            Teste o EcoTátil aqui mesmo. Digite, ouça, sinta o conceito.
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Este simulador replica o comportamento do nosso hardware: relevo dinâmico e áudio sincronizado em português.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          {/* Device */}
          <div className="relative">
            <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 backdrop-blur">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest">
                  <span className="h-2 w-2 rounded-full bg-tactile animate-pulse" />
                  EcoTátil • Célula 1
                </div>
                {manualMode && (
                  <button onClick={() => { setManualMode(false); setManualDots([]); }}
                    className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white">
                    <X className="h-3 w-3" /> voltar ao texto
                  </button>
                )}
              </div>
              <BrailleCell dots={activeDots} large onToggle={toggleManual} />
              <div className="mt-8 text-center">
                <div className="text-xs text-white/50 uppercase tracking-widest">Caractere</div>
                <div className="mt-1 font-display text-6xl">
                  {manualMode ? manualChar : (currentChar || "—")}
                </div>
                {manualMode && (
                  <button onClick={speakManual}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-tactile text-navy-deep px-4 py-2 text-sm font-semibold">
                    <Volume2 className="h-4 w-4" /> Ouvir
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            <label className="block">
              <span className="text-sm text-white/70">Digite uma letra ou palavra</span>
              <input
                autoFocus
                type="text"
                value={text}
                onChange={(e) => { setManualMode(false); setText(e.target.value); }}
                placeholder="Ex: Braille"
                className="mt-2 w-full rounded-2xl bg-white/5 border border-white/15 px-5 py-4 text-2xl font-display text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-tactile focus:border-tactile"
              />
            </label>

            {text.length > 1 && !manualMode && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs text-white/50 uppercase tracking-widest mb-3">Sequência</div>
                <div className="flex flex-wrap gap-3">
                  {text.split("").slice(0, 12).map((ch, idx) => (
                    <MiniCell key={idx} ch={ch} highlight={idx === text.length - 1} />
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-tactile/30 bg-tactile/10 p-5 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-tactile shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Dica:</strong> clique diretamente nos pinos para formar caracteres manualmente e descubra qual letra em Braille você escreveu.
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-3 text-sm text-white/70">
              {[
                "Áudio em português (pt-BR)",
                "Relevo simulado em 3D",
                "26 letras + acentos",
                "Modo manual interativo",
              ].map(f => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-tactile" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniCell({ ch, highlight }: { ch: string; highlight?: boolean }) {
  const dots = dotsFor(ch);
  const order = [1, 4, 2, 5, 3, 6];
  return (
    <div className={`p-2 rounded-lg ${highlight ? "bg-tactile/20 ring-1 ring-tactile" : "bg-white/5"}`}>
      <div className="grid grid-cols-2 gap-1">
        {order.map(n => (
          <span key={n} className={`h-2.5 w-2.5 rounded-full ${dots.includes(n) ? "bg-tactile" : "bg-white/15"}`} />
        ))}
      </div>
      <div className="mt-1 text-[10px] text-center text-white/60 uppercase">{ch === " " ? "␣" : ch}</div>
    </div>
  );
}

// ---------------- Scientific differentiator ----------------
function Scientific() {
  return (
    <section id="diferenciais" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <p className="text-tactile text-sm font-semibold uppercase tracking-widest">Diferencial Científico</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy-deep text-balance-tight">
            Braille Ampliado, pensado para o cérebro da criança.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            O EcoTátil utiliza um espaçamento estrategicamente ampliado entre os pontos, adequado à fase infantil. Pesquisas em tecnologia assistiva (Saikot & Sanim, 2022) mostram que crianças em fase de alfabetização e com desenvolvimento motor recente possuem <strong className="text-navy-deep">menor resolução espacial tátil</strong>.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            O tamanho padrão de papel torna a leitura frustrante. Ao reduzir o esforço cognitivo necessário para discriminar cada ponto, o EcoTátil <strong className="text-navy-deep">acelera a curva de aprendizado</strong> e mantém o engajamento.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Brain, t: "Menor esforço cognitivo", d: "Discriminação tátil facilitada." },
              { icon: BookOpen, t: "Base pedagógica", d: "Fundamentado em literatura científica." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-tactile-soft/60 flex items-center justify-center text-navy-deep">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-navy-deep">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-10 text-white overflow-hidden">
            <div aria-hidden className="absolute inset-0 opacity-30" style={{
              backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.72 0.15 155 / 0.4), transparent 40%)"
            }} />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest text-white/60 mb-6">Comparativo de tamanho</div>
              <div className="flex items-end gap-10">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-1.5 p-3 rounded-xl bg-white/5">
                    {[1,4,2,5,3,6].map(n => (
                      <span key={n} className="h-3 w-3 rounded-full bg-white/40" />
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-white/60">Braille padrão</div>
                </div>
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-tactile/10 ring-1 ring-tactile/40">
                    {[1,4,2,5,3,6].map(n => (
                      <span key={n} className="h-8 w-8 rounded-full bg-tactile shadow-lg" />
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-tactile font-semibold">EcoTátil (Ampliado)</div>
                </div>
              </div>
              <p className="mt-8 text-sm text-white/70 leading-relaxed">
                Pontos e espaçamento maiores para reduzir a frustração inicial e aumentar a taxa de acerto durante a alfabetização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Cost comparison ----------------
function CostComparison() {
  const data = [
    { name: "Linha Braille Premium", value: 25000, fill: "oklch(0.58 0.22 27)" },
    { name: "Linha Braille Básica", value: 12000, fill: "oklch(0.65 0.15 40)" },
    { name: "EcoTátil MVP", value: 497, fill: "oklch(0.72 0.15 155)" },
  ];
  return (
    <section className="py-28 bg-secondary/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-tactile text-sm font-semibold uppercase tracking-widest">Comparação de Mercado</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy-deep text-balance-tight">
            Até 97% mais barato. Sem abrir mão da qualidade pedagógica.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-2xl bg-card border border-border p-6">
            <div className="text-sm text-muted-foreground mb-4">Custo unitário (BRL)</div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ left: 30, right: 60, top: 10, bottom: 10 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={160} stroke="oklch(0.5 0.03 260)" tick={{ fontSize: 13 }} axisLine={false} tickLine={false} />
                  <Bar dataKey="value" radius={[0, 12, 12, 0]} barSize={38}>
                    {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
                    <LabelList dataKey="value" position="right" formatter={(v: number) => `R$ ${v.toLocaleString("pt-BR")}`} style={{ fill: "oklch(0.18 0.04 260)", fontWeight: 600, fontSize: 13 }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-navy-deep text-white p-6">
              <div className="text-xs uppercase tracking-widest text-tactile">EcoTátil MVP</div>
              <div className="mt-2 font-display text-4xl font-semibold">R$ 497,00</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-tactile shrink-0 mt-0.5" /> Altamente escalável</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-tactile shrink-0 mt-0.5" /> Hardware e software abertos</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-tactile shrink-0 mt-0.5" /> Manutenção comunitária</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Mercado</div>
              <div className="mt-2 font-display text-2xl font-semibold text-navy-deep">R$ 12.000 – R$ 25.000</div>
              <p className="mt-2 text-sm text-muted-foreground">Importados, sem suporte local e fora do orçamento de escolas públicas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Team ----------------
type Founder = { name: string; role: string; photo: string };
function Team() {
  const founders: Founder[] = [
    { name: "Theo Mello", role: "Hardware & Integração", photo: fotoTheo.url },
    { name: "Thiago Araujo", role: "Modelagem 3D & Software", photo: fotoThiago.url },
    { name: "Rafael Collares", role: "Hardware & Integração", photo: fotoRafael.url },
  ];
  return (
    <section id="equipe" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-tactile text-sm font-semibold uppercase tracking-widest">Sobre a Jumpers</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy-deep text-balance-tight">
            Engenheiros com uma missão: alfabetização em Braille para todos.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {founders.map(({ name, role, photo }) => (
            <div key={name} className="group rounded-2xl border border-border bg-card p-6 hover:border-tactile transition-colors">
              <div className="relative aspect-square rounded-xl bg-gradient-to-br from-navy to-navy-deep overflow-hidden">
                <img
                  src={photo}
                  alt={`Retrato de ${name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-5">
                <div className="font-semibold text-navy-deep">{name}</div>
                <div className="text-sm text-muted-foreground mt-1">{role}</div>
              </div>
            </div>
          ))}
        </div>

        <div id="relatorio" className="mt-14 rounded-3xl bg-navy-deep text-white p-10 md:p-14 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl md:text-3xl font-semibold">Fale com a equipe da Jumpers</h3>
            <p className="mt-3 text-white/70">Sede em Belém do Pará. Estamos abertos a parcerias com escolas, universidades e órgãos públicos.</p>
            <div className="mt-6 space-y-3 text-white/80 text-sm">
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-tactile" /> Rua Augusto Corrêa, 1 — Guamá, Belém-PA</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-tactile" /> (91) 97394-9524</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-tactile" /> jumpersltda@gmail.com</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:justify-center">
            <a href="mailto:jumpersltda@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-tactile text-navy-deep px-6 py-3 text-sm font-semibold hover:brightness-105 transition">
              <Mail className="h-4 w-4" /> Enviar e-mail
            </a>
            <a href="#top" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              <Download className="h-4 w-4" /> Baixar Relatório
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Product showcase ----------------
function Product() {
  return (
    <section id="produto" className="py-28 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-tactile text-sm font-semibold uppercase tracking-widest">O Produto</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-navy-deep text-balance-tight">
            Um dispositivo compacto, robusto e pronto para a sala de aula.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Gabinete impresso em 3D, componentes integrados e acabamento ergonômico — pensado para durar nas mãos das crianças.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {[
            { src: caixaFechada.url, title: "Gabinete finalizado", desc: "Formato compacto com célula Braille ampliada, alto-falante e botão principal." },
            { src: caixaAberta.url, title: "Eletrônica interna", desc: "Micro servomotores acionando cada pino, integrados à placa de controle." },
          ].map((it) => (
            <figure key={it.title} className="group rounded-3xl overflow-hidden border border-border bg-card hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
                <img
                  src={it.src}
                  alt={it.title}
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-6">
                <div className="font-semibold text-navy-deep">{it.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div id="instalar" className="mt-14 rounded-3xl border border-border bg-card p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <p className="text-tactile text-xs font-semibold uppercase tracking-widest">Software EcoTátil</p>
            <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-navy-deep">
              Instale o firmware e comece a alfabetizar hoje.
            </h3>
            <p className="mt-3 text-muted-foreground">
              Baixe o software oficial do EcoTátil — código aberto, atualizações contínuas e compatível com Windows, macOS e Linux.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href="#instalar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep text-white px-6 py-3 text-sm font-semibold hover:bg-navy transition"
            >
              <Download className="h-4 w-4" /> Instalar Software
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------- Footer ----------------
function Footer() {
  return (
    <footer className="bg-navy-deep text-white/60 py-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-tactile text-navy-deep">
            <span className="grid grid-cols-2 gap-[2px]">
              {[1,2,3,4,5,6].map(i => (
                <span key={i} className={`h-1 w-1 rounded-full ${[1,2,4,5].includes(i) ? "bg-navy-deep" : "bg-navy-deep/30"}`} />
              ))}
            </span>
          </span>
          <span className="text-white font-semibold">Jumpers</span>
        </div>
        <p className="max-w-2xl md:text-right leading-relaxed">
          © 2026 Jumpers Tecnologia Assistiva. Desenvolvido para a disciplina de Laboratório de Circuitos Elétricos — Engenharia da Computação, UFPA.
        </p>
      </div>
    </footer>
  );
}

// ---------------- Page ----------------
function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Solution />
      <Simulator />
      <Scientific />
      <CostComparison />
      <Product />
      <Team />
      <Footer />
    </main>
  );
}
