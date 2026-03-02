import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronDown, 
  Plus, 
  Minus, 
  ArrowRight, 
  Zap, 
  Search, 
  Rocket, 
  MessageSquare, 
  Target,
  Users,
  Eye,
  Layout,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

const packages = [
  {
    id: "diagnostic",
    title: "Diagnostic Call",
    price: "$70",
    tag: "Быстрый старт",
    format: "90 минут, 1 задача, ясный план действий",
    description: "Вы приходите с конкретным вопросом — уходите с пониманием, что делать дальше. Это не общая консультация «про всё», а точечный разбор одной задачи: оффер, контент, воронка, упаковка, запуск — что угодно.",
    process: "Короткий бриф (5 мин) → Созвон 90 минут → План действий в течение 24 часов",
    deliverables: "Структурированный документ с 5-10 конкретными шагами, приоритетами и метриками",
    cta: "Записаться на Diagnostic Call →",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-blue-500/10 text-blue-400"
  },
  {
    id: "audit",
    title: "Social Media Audit",
    price: "$200",
    tag: "Самый популярный",
    format: "Полный разбор соцсетей + стратегия и план на 2-4 недели",
    description: "Глубокий аудит: контент, оффер, упаковка, воронка, точки роста — и конкретный план, который можно внедрять сразу.",
    process: "Бриф → Звонок 1 (75-90 мин): аудит и разбор → Звонок 2 (45-60 мин): стратегия и план внедрения",
    deliverables: [
      "Рекомендации по упаковке профиля",
      "Контент-матрица: рубрики, пропорции, 10-15 тем и хуков",
      "Пошаговый план на 2-4 недели с KPI",
      "1 раунд правок по итоговому документу"
    ],
    cta: "Записаться на Audit →",
    icon: <Search className="w-5 h-5" />,
    color: "bg-brand-red/10 text-brand-red"
  },
  {
    id: "sprint",
    title: "Advisor Sprint",
    price: "$500",
    tag: "Максимум результата",
    format: "7 дней совместной работы: стратегия + система + внедрение",
    description: "Это не консультация — это мини-проект. За неделю я вместе с вами собираю рабочую систему под вашу задачу и начинаю внедрение.",
    process: "Бриф и сбор данных → 3 созвона (суммарно 2.5-3.5 часа) → Работа между звонками → Поддержка в чате 7 дней",
    deliverables: [
      "Roadmap на 30 дней с KPI и контрольными точками",
      "Готовая система под задачу (оффер + скрипты продаж, контент-воронка + шаблоны, структура прогрева + цепочка сообщений)",
      "Чат-поддержка в течение спринта для вопросов по внедрению"
    ],
    cta: "Записаться на Sprint →",
    icon: <Rocket className="w-5 h-5" />,
    color: "bg-emerald-500/10 text-emerald-400"
  }
];

const faqs = [
  {
    question: "Я не знаю, какой формат выбрать. Что посоветуете?",
    answer: "Начните с Diagnostic Call ($70). За 90 минут мы разберём вашу ситуацию, и вы поймёте, нужна ли дальнейшая работа. Если да — стоимость звонка засчитается в оплату пакета."
  },
  {
    question: "Это подходит только для Instagram?",
    answer: "Нет. Мы работаем с любой платформой и задачей: Instagram, Telegram, TikTok, YouTube, упаковка оффера, воронки продаж."
  },
  {
    question: "Что если мне нужна помощь после окончания работы?",
    answer: "После любого пакета вы можете продолжить работу: взять новый Sprint, перейти на ежемесячное сопровождение или записаться на разовый звонок."
  },
  {
    question: "Вы работаете только на русском?",
    answer: "Нет, работаю на русском и английском."
  },
  {
    question: "Как проходит оплата?",
    answer: "После подтверждения формата я отправляю ссылку на оплату. Работа начинается после получения оплаты."
  },
  {
    question: "Можно ли получить возврат?",
    answer: "Если мы не начали работу — да, полный возврат. После первого звонка — нет, так как вы уже получили экспертизу и материалы."
  }
];

const testimonials = [
  {
    name: "Анна, эксперт по психологии",
    problem: "Хаос в контенте, нет заявок",
    format: "Social Media Audit",
    result: "Выстроила воронку, за первую неделю получила 5 целевых запросов. Теперь понимаю, о чем писать каждый день.",
    avatar: "https://picsum.photos/seed/anna/100/100"
  },
  {
    name: "Дмитрий, владелец IT-агентства",
    problem: "Нужен был свежий взгляд на оффер",
    format: "Diagnostic Call",
    result: "За 90 минут пересобрали предложение. Конверсия из КП в сделку выросла на 15%.",
    avatar: "https://picsum.photos/seed/dmitry/100/100"
  },
  {
    name: "Елена, онлайн-школа",
    problem: "Запуск нового продукта",
    format: "Advisor Sprint",
    result: "Собрали систему за неделю. Результат — запуск на 1.2 млн без выгорания и лишних действий.",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: number | string;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand-red transition-colors"
      >
        <span className="text-lg font-bold text-white">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 shrink-0 text-white" /> : <Plus className="w-5 h-5 shrink-0 text-white" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white font-sans bg-brand-dark">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-tighter text-white">
            IVAN <span className="text-brand-red">DZHURAEV</span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
            <a href="#about" className="hover:text-brand-red transition-colors">Для кого</a>
            <a href="#formats" className="hover:text-brand-red transition-colors">Форматы</a>
            <a href="#process" className="hover:text-brand-red transition-colors">Процесс</a>
            <a href="https://t.me/Dzhuraev_marketing" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-white/20 rounded-full hover:bg-brand-red hover:border-brand-red hover:text-white transition-all">Связаться</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-40 px-6 overflow-hidden">
        {/* Background Blurred Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <div className="text-[20vw] font-display font-black text-white/5 uppercase leading-none blur-3xl">SYSTEMS</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-huge font-display font-black uppercase mb-8 md:mb-12 text-balance leading-[0.9] text-white">
              Контент без системы — <span className="text-brand-red">это расходы.</span> <br className="hidden md:block" />
              Контент с системой — это канал продаж.
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-lg md:text-3xl text-white/60 font-medium text-balance leading-tight">
                  Разберу ваш и превращу во второе. Одна консультация или неделя совместной работы — выбирайте формат.
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-start lg:justify-end">
                <motion.a 
                  href="https://t.me/Dzhuraev_marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-8 md:px-12 py-5 md:py-6 bg-brand-red text-white font-black uppercase tracking-widest rounded-full text-base md:text-lg hover:bg-white hover:text-brand-dark transition-all shadow-2xl shadow-brand-red/20"
                >
                  Выбрать формат <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who it's for Section */}
      <section id="about" className="py-20 md:py-40 px-6 bg-brand-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <div className="text-brand-red font-mono text-sm uppercase tracking-[0.4em] mb-8">/ WHO I HELP</div>
              <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter mb-12 md:mb-16 uppercase leading-none text-white">
                Подходит <br /><span className="text-white/20">вам, если:</span>
              </h2>
              <div className="space-y-4">
                {[
                  { icon: <Users />, text: "Вы эксперт или предприниматель и хотите выстроить соцсети системно, а не хаотично" },
                  { icon: <Layout />, text: "У вас есть продукт или услуга, но нет понятной воронки и упаковки" },
                  { icon: <TrendingUp />, text: "Вы уже ведёте контент, но не понимаете, почему нет роста и заявок" },
                  { icon: <Eye />, text: "Вам нужен внешний взгляд, чтобы увидеть слепые зоны" },
                  { icon: <Target />, text: "Вы хотите не «поговорить», а уйти с планом и начать внедрять" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 md:gap-8 p-6 md:p-8 bg-white/5 rounded-3xl border border-white/5 group hover:bg-white/10 hover:border-brand-red/30 transition-all"
                  >
                    <div className="text-brand-red group-hover:scale-110 transition-transform shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-lg md:text-xl font-bold leading-tight text-white">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative lg:sticky lg:top-32 w-full">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-brand-dark rounded-[32px] md:rounded-[48px] overflow-hidden relative border border-white/10">
                <img 
                  src="https://picsum.photos/seed/dark-consult/1200/1500" 
                  alt="Consulting" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12">
                  <div className="text-white text-2xl md:text-4xl font-display font-black uppercase leading-none tracking-tighter">
                    Фокус на <br /><span className="text-brand-red italic">результате</span>, <br />а не на процессе.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="formats" className="py-20 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 md:gap-12">
            <div className="max-w-3xl">
              <div className="text-brand-red font-mono text-sm uppercase tracking-[0.4em] mb-8">/ SERVICES</div>
              <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
                Форматы <br /><span className="text-white/20">работы</span>
              </h2>
            </div>
            <p className="text-white/40 text-lg md:text-xl max-w-sm font-medium leading-tight">
              Выберите глубину погружения в зависимости от ваших целей.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col h-full p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/5 hover:border-brand-red/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  {pkg.icon}
                </div>

                <div className="mb-8 md:mb-12">
                  <div className={`inline-flex p-3 rounded-xl mb-6 ${pkg.color}`}>
                    {pkg.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-4 block">{pkg.tag}</span>
                  <h3 className="text-3xl md:text-4xl font-display font-black uppercase mb-2 tracking-tighter text-white">{pkg.title}</h3>
                  <div className="text-4xl md:text-5xl font-display font-black text-white mb-6">{pkg.price}</div>
                </div>
                
                <div className="space-y-6 md:space-y-8 flex-grow">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-3">Формат:</div>
                    <p className="text-base md:text-lg font-bold leading-tight text-white">{pkg.format}</p>
                  </div>
                  
                  <p className="text-white/50 text-sm leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-3">Как проходит:</div>
                      <p className="text-sm font-bold leading-relaxed text-white/80">{pkg.process}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-3">Что получите:</div>
                      {Array.isArray(pkg.deliverables) ? (
                        <ul className="space-y-2 md:space-y-3">
                          {pkg.deliverables.map((item, i) => (
                            <li key={i} className="text-sm font-bold flex items-start gap-3 text-white/90">
                              <span className="text-brand-red mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm font-bold leading-relaxed text-white/80">{pkg.deliverables}</p>
                      )}
                    </div>
                  </div>
                </div>

                <a 
                  href="https://t.me/Dzhuraev_marketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full mt-10 md:mt-12 py-5 md:py-6 rounded-2xl bg-white text-brand-dark font-black uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all flex items-center justify-center gap-3"
                >
                  {pkg.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            className="max-w-4xl mx-auto p-10 rounded-[32px] bg-brand-red/10 border border-brand-red/20 flex items-center gap-8"
          >
            <div className="text-5xl">💡</div>
            <p className="text-xl font-bold leading-tight text-white/80">
              Начните с <span className="text-brand-red">Diagnostic Call</span> — если в течение 7 дней вы выберете Audit или Sprint, $70 засчитывается в оплату.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-40 px-6 bg-brand-gray relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-32">
            <div className="text-brand-red font-mono text-sm uppercase tracking-[0.4em] mb-8">/ THE ROADMAP</div>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
              4 шага <br /><span className="text-white/20">к результату</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { step: "01", title: "Заявка", text: "Вы оставляете заявку и выбираете подходящий формат работы" },
              { step: "02", title: "Бриф", text: "Заполняете короткий бриф (5-10 минут), чтобы я подготовился" },
              { step: "03", title: "Созвон", text: "Провожу созвон(ы) — разбираю, строю, решаю вашу задачу" },
              { step: "04", title: "Внедрение", text: "Вы получаете документ с планом и начинаете внедрять" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-6xl md:text-8xl font-display font-black text-white/5 mb-6 md:mb-8 group-hover:text-brand-red/20 transition-colors">{item.step}</div>
                <h4 className="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6 flex items-center gap-4 text-white">
                  <span className="w-3 h-3 rounded-full bg-brand-red" />
                  {item.title}
                </h4>
                <p className="text-white/40 text-base md:text-lg leading-relaxed font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-32">
            <div className="text-brand-red font-mono text-sm uppercase tracking-[0.4em] mb-8">/ REVIEWS</div>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter uppercase leading-none text-white">
              Что говорят <br /><span className="text-white/20">клиенты</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="p-8 md:p-10 bg-white/5 rounded-[32px] md:rounded-[40px] border border-white/10 relative group"
              >
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-brand-red/30 grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-black uppercase text-xs md:text-sm tracking-widest text-white">{t.name}</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">{t.format}</div>
                  </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4">Проблема:</div>
                <p className="text-base md:text-lg font-bold mb-6 md:mb-8 italic text-white/80 leading-tight">«{t.problem}»</p>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4">Результат:</div>
                <p className="text-base md:text-lg leading-relaxed text-white/60 font-medium">{t.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-40 px-6 bg-brand-gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="text-brand-red font-mono text-sm uppercase tracking-[0.4em] mb-8">/ FAQ</div>
            <h2 className="font-display text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white">
              Частые <br /><span className="text-white/20">вопросы</span>
            </h2>
          </div>
          <div className="border-t border-white/10">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-red rounded-[40px] md:rounded-[64px] p-10 md:p-32 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-9xl font-black tracking-tighter mb-8 md:mb-12 uppercase leading-[0.9] text-white">
                Готовы <br />разобраться?
              </h2>
              <p className="text-white/80 text-xl md:text-4xl mb-12 md:20 max-w-3xl mx-auto font-black uppercase tracking-tighter leading-none">
                Выберите формат, оставьте заявку — и я начну.
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {packages.map((pkg) => (
                  <motion.a
                    key={pkg.id}
                    href="https://t.me/Dzhuraev_marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-6 bg-white text-brand-dark font-black uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-4 text-xs md:text-sm"
                  >
                    {pkg.title} <ArrowRight className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <div className="mt-12 md:mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-12 text-white/50 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                <a href="https://t.me/Dzhuraev_marketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6" /> Telegram
                </a>
                <a href="https://t.me/Dzhuraev_marketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
          <div>© 2024 IVAN DZHURAEV — Marketing & Process Advisor</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


