'use client';

import { useState } from 'react';
import { resumeData } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Globe, Download, Database, Cloud, Code, Terminal,
  Layers, BrainCircuit, MessageCircle, GitMerge,
  GraduationCap, Book
} from 'lucide-react';

const getSkillStyle = (skillName) => {
  const styles = {
    'Inglês': { icon: MessageCircle, color: 'bg-violet-500', cat: 'Comunicação' },
    '.NET': { icon: Code, color: 'bg-pink-500', cat: 'Backend' },
    'RabbitMQ': { icon: Layers, color: 'bg-orange-500', cat: 'Mensageria' },
    'SQL': { icon: Database, color: 'bg-blue-500', cat: 'Database' },
    'NoSQL': { icon: Database, color: 'bg-emerald-500', cat: 'Database' },
    'Estrutura de dados': { icon: GitMerge, color: 'bg-violet-600', cat: 'Fundamentos' },
    'Cloud': { icon: Cloud, color: 'bg-blue-400', cat: 'Infrastructure' },
    'Ágil': { icon: Layers, color: 'bg-orange-400', cat: 'Metodologia' },
    'DevOps': { icon: Terminal, color: 'bg-teal-500', cat: 'Operations' },
    'CI/CD': { icon: GitMerge, color: 'bg-pink-500', cat: 'Automation' },
    'Python': { icon: Code, color: 'bg-slate-500', cat: 'Programming' },
    'Machine Learning': { icon: BrainCircuit, color: 'bg-violet-500', cat: 'AI' }
  };
  return styles[skillName] || { icon: Code, color: 'bg-slate-500', cat: 'Tech' };
};

export default function Home() {
  const [lang, setLang] = useState('pt');
  const data = resumeData[lang];

  const navItems = [
    { label: lang === 'pt' ? 'Habilidades' : 'Skills', href: '#habilidades' },
    { label: lang === 'pt' ? 'Experiência Profissional' : 'Experience', href: '#experiencia' },
    { label: lang === 'pt' ? 'Educação' : 'Education', href: '#educacao' },
    { label: lang === 'pt' ? 'Projetos' : 'Projects', href: '#projetos' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const flatJobs = data.jobs.flatMap(job =>
    job.positions.map((pos, idx) => ({
      company: pos.title.split(' - ')[0],
      role: pos.title.split(' - ')[1],
      period: pos.period,
      contents: (job.positions.length > 1 && idx === 0) ? null : job.contents,
      isCurrent: pos.period.toLowerCase().includes('atual') || pos.period.toLowerCase().includes('present')
    }))
  );

  return (
    <div className="min-h-screen font-sans text-slate-800">

      <header className="sticky top-0 z-50 w-full border-b bg-white/60 backdrop-blur-md shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg text-slate-900 tracking-tight italic">
            {data.name}
          </span>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium text-slate-500 hover:text-violet-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="p-2 border rounded-md hover:bg-slate-50 text-slate-500 transition-colors">
              <Globe size={18} />
            </button>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6 text-sm font-medium">
              <Download size={14} className="mr-2" />
              {lang === 'pt' ? 'Baixar CV' : 'Download CV'}
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full flex flex-col">

        <section id="topo" className="w-full bg-slate-50 pt-16 pb-24 md:pt-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-12 lg:gap-20 justify-between"
          >
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative rounded-full border-4 border-white shadow-2xl overflow-hidden shrink-0">
              <Image src="/me.jpg" alt={data.name} fill className="object-cover" priority />
            </div>

            <div className="flex-1 space-y-6 text-left pt-2">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                  {data.name}
                </h1>
                <p className="text-xl text-violet-600 mt-2 font-semibold">
                  {data.title}
                </p>
              </div>

              <p className="text-slate-500 leading-relaxed text-base md:text-lg max-w-3xl">
                {data.description || 'Atualmente atuando como desenvolvedor Back-end no Banco Safra SA. Apaixonado por tecnologia, busco desafios que ampliem minhas habilidades em arquitetura de sistemas e soluções escaláveis.'}
              </p>

              <Button
                variant="outline"
                className="group relative border-violet-600 text-violet-600 hover:text-white font-bold px-8 py-6 rounded-xl transition-all duration-300 overflow-hidden shadow-sm hover:shadow-violet-200 hover:shadow-lg active:scale-95"
              >
                <span className="absolute inset-0 bg-violet-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {lang === 'pt' ? 'Entre em Contato' : 'Get in Touch'}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Button>
            </div>
          </motion.div>
        </section>

        <section id="habilidades" className="w-full bg-white py-20 md:py-28 scroll-mt-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">

            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-xl font-medium text-slate-700 whitespace-nowrap">
                {lang === 'pt' ? 'Habilidades' : 'Skills'}
              </h2>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {data.skills.map((skillItem, index) => {
                const skillName = skillItem[0];
                const style = getSkillStyle(skillName);
                const IconComponent = style.icon;

                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="border-slate-100 bg-slate-50/50 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className={`w-10 h-10 shrink-0 rounded-full ${style.color} text-white flex items-center justify-center`}>
                          <IconComponent size={20} />
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="font-bold text-slate-900 text-sm leading-tight">{skillName}</h3>
                          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-0.5">{style.cat}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="experiencia" className="w-full bg-slate-50 py-20 md:py-28 scroll-mt-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">

            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-xl font-medium text-slate-700 whitespace-nowrap">
                {lang === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
              </h2>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            <div className="space-y-6 w-full">
              {flatJobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="relative overflow-hidden border-0 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] bg-white rounded-xl">
                    <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-violet-600" />

                    <CardContent className="p-7 pl-10">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="space-y-2">
                          <h3 className="text-[1.1rem] font-semibold text-slate-800">
                            {job.company}
                          </h3>
                          <p className="text-[0.95rem] text-slate-400 font-medium">
                            {job.role}
                          </p>
                        </div>

                        <div className={`px-4 py-1.5 rounded-full text-[0.75rem] font-medium whitespace-nowrap ${job.isCurrent
                          ? 'bg-violet-50 text-violet-600'
                          : 'bg-slate-100 text-slate-400'
                          }`}>
                          {job.period}
                        </div>
                      </div>

                      {job.contents && (
                        <p className="text-slate-500 leading-relaxed text-[0.95rem] mt-6">
                          {job.contents}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="educacao" className="w-full bg-white py-20 md:py-28 scroll-mt-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">

            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-xl font-medium text-slate-700 whitespace-nowrap">
                {lang === 'pt' ? 'Educação' : 'Education'}
              </h2>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            <div className="relative max-w-5xl mx-auto">

              <div className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-[2px] bg-violet-200 md:-translate-x-1/2"></div>

              {data.education.map((edu, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 ${isLeft ? 'md:flex-row-reverse' : ''
                      }`}
                  >
                    <div className="hidden md:block md:w-[45%]"></div>

                    <div className="absolute left-[11px] md:left-1/2 transform md:-translate-x-1/2 w-[18px] h-[18px] rounded-full bg-violet-600 shadow-[0_0_0_4px_white] z-10 mt-7 md:mt-0"></div>

                    <div className="w-full pl-12 md:pl-0 md:w-[45%]">
                      <Card className="border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                        <CardContent className="p-8">

                          <div className="mb-4 space-y-1">
                            <h3 className="text-[1.15rem] font-bold text-slate-800 leading-tight">
                              {edu.title.includes(' - ') ? edu.title.split(' - ')[0] : edu.title}
                            </h3>
                            {edu.title.includes(' - ') && (
                              <p className="text-[1rem] text-slate-500 font-medium">
                                {edu.title.split(' - ')[1]}
                              </p>
                            )}
                          </div>

                          <p className="text-slate-500 text-[0.9rem] leading-relaxed mb-6">
                            {edu.contents}
                          </p>

                          {edu.techs && edu.techs.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {edu.techs.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-3 py-1 border border-violet-300 text-violet-500 bg-transparent text-[0.75rem] font-medium rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        <section id="projetos" className="w-full bg-slate-50 py-20 md:py-28 scroll-mt-16 min-h-[50vh]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center text-slate-400 italic">
          </div>
        </section>

      </main>
    </div>
  );
}