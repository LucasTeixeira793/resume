'use client';

import { useState } from 'react';
import { resumeData } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Download, Database, Cloud, Code, Terminal, 
  Layers, BrainCircuit, MessageCircle, GitMerge, 
  GraduationCap, Book, X, ChevronRight, ExternalLink,
  ShieldCheck, Bot, Activity, Rocket, FolderCode,
  Mail, Send, Loader2
} from 'lucide-react';

// Ícones manuais para substituir os que foram removidos da biblioteca Lucide
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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

const getProjectIcon = (projectName) => {
  const icons = {
    'TCC': GraduationCap,
    'Kallistra': Rocket,
    'Iara': Bot,
    'SafeLog': ShieldCheck,
    'StrongBerry': Activity,
    'Semstress ABC': Layers
  };
  return icons[projectName] || FolderCode; 
};

export default function Home() {
  const [lang, setLang] = useState('pt');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Nova função de envio nativa (Evita bloqueios de AdBlock e erros de CORS)
  const handleSendMessage = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Cria um formulário HTML virtual para enviar os dados
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://formsubmit.co/teixeiralucas793@gmail.com';
      form.target = '_blank'; // Abre a tela do FormSubmit em uma nova aba

      // Configura os campos que vão no e-mail
      const fields = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `Novo contato via Portfólio: ${formData.name}`,
        _template: "table",
        _captcha: "false" // Desativa o teste de "Não sou um robô"
      };

      // Adiciona os campos ao formulário virtual
      for (const key in fields) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      }

      // Dispara o envio
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Fecha o PopUp e limpa os campos
      setIsContactModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert(lang === 'pt' ? 'Erro ao enviar. Tente novamente.' : 'Error sending. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const flatJobs = data.jobs?.flatMap(job =>
    job.positions.map((pos, idx) => ({
      company: pos.title.split(' - ')[0],
      role: pos.title.split(' - ')[1],
      period: pos.period,
      contents: (job.positions.length > 1 && idx === 0) ? null : job.contents,
      isCurrent: pos.period.toLowerCase().includes('atual') || pos.period.toLowerCase().includes('present')
    }))
  ) || [];

  return (
    <div className="min-h-screen font-sans text-slate-800 relative">

      {/* NAVBAR */}
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

        {/* HERO */}
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
                {data.description || 'Atualmente atuando como desenvolvedor. Apaixonado por tecnologia, busco desafios que ampliem minhas habilidades em arquitetura de sistemas e soluções escaláveis.'}
              </p>

              <Button
                variant="outline"
                onClick={() => setIsContactModalOpen(true)}
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

        {/* HABILIDADES */}
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
                show: { opacity: 1, transition: { staggerChildren: 0.05 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {data.skills?.map((skillItem, index) => {
                const style = getSkillStyle(skillItem[0]);
                const IconComponent = style.icon;

                return (
                  <motion.div
                    key={index}
                    variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="border-slate-100 bg-slate-50/50 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className={`w-10 h-10 shrink-0 rounded-full ${style.color} text-white flex items-center justify-center`}>
                          <IconComponent size={20} />
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="font-bold text-slate-900 text-sm leading-tight">{skillItem[0]}</h3>
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

        {/* EXPERIÊNCIA PROFISSIONAL */}
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
                          <h3 className="text-[1.1rem] font-semibold text-slate-800">{job.company}</h3>
                          <p className="text-[0.95rem] text-slate-400 font-medium">{job.role}</p>
                        </div>
                        <div className={`px-4 py-1.5 rounded-full text-[0.75rem] font-medium whitespace-nowrap ${job.isCurrent ? 'bg-violet-50 text-violet-600' : 'bg-slate-100 text-slate-400'}`}>
                          {job.period}
                        </div>
                      </div>
                      {job.contents && <p className="text-slate-500 leading-relaxed text-[0.95rem] mt-6">{job.contents}</p>}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCAÇÃO */}
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
              {data.education?.map((edu, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}
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
                              <p className="text-[1rem] text-slate-500 font-medium">{edu.title.split(' - ')[1]}</p>
                            )}
                          </div>
                          <p className="text-slate-500 text-[0.9rem] leading-relaxed mb-6">{edu.contents}</p>
                          {edu.techs && edu.techs.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {edu.techs.map((tech, tIdx) => (
                                <span key={tIdx} className="px-3 py-1 border border-violet-300 text-violet-500 bg-transparent text-[0.75rem] font-medium rounded-md">{tech}</span>
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

        {/* PROJETOS */}
        <section id="projetos" className="w-full bg-slate-50 py-20 md:py-28 scroll-mt-16 relative">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-xl font-medium text-slate-700 whitespace-nowrap">
                {lang === 'pt' ? 'Projetos' : 'Projects'}
              </h2>
              <div className="h-[1px] bg-slate-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects?.map((project, index) => {
                const ProjectIcon = getProjectIcon(project.title);
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 h-full flex flex-col bg-white rounded-xl">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-inner">
                            <ProjectIcon size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-[1.1rem] leading-tight">{project.title}</h3>
                            <p className="text-violet-500 text-xs font-semibold uppercase tracking-wider mt-1">{project.period || 'jan/24 - dez/24'}</p>
                          </div>
                        </div>
                        <p className="text-slate-500 text-[0.95rem] leading-relaxed mb-8 flex-1 line-clamp-4">{project.contents}</p>
                        <div className="border-t border-slate-100 pt-5 flex justify-end">
                          <button onClick={() => setSelectedProject(project)} className="text-violet-600 text-[0.8rem] font-bold flex items-center gap-1 hover:text-violet-800 transition-colors group tracking-wide uppercase">
                            {lang === 'pt' ? 'Ver Projeto' : 'View Project'} 
                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* POPUP DE DETALHES DO PROJETO */}
      <AnimatePresence>
        {selectedProject && (() => {
          const ModalIcon = getProjectIcon(selectedProject.title);
          return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
                onClick={() => setSelectedProject(null)} 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} 
                className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
              >
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center">
                      <ModalIcon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xl">{selectedProject.title}</h3>
                      <p className="text-violet-500 text-sm font-medium uppercase tracking-wider">{selectedProject.period || 'jan/24 - dez/24'}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors">
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 md:p-8 overflow-y-auto bg-slate-50/50">
                  <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">{lang === 'pt' ? 'Sobre o projeto' : 'About the project'}</h4>
                  <p className="text-slate-600 text-base leading-relaxed whitespace-pre-wrap">{selectedProject.contents}</p>
                  
                  {selectedProject.techs && selectedProject.techs.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">{lang === 'pt' ? 'Tecnologias utilizadas' : 'Technologies used'}</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techs.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white text-violet-600 text-xs font-bold rounded-lg border border-violet-100 shadow-sm">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 bg-white border-t border-slate-100 flex justify-end gap-3">
                  <Button onClick={() => setSelectedProject(null)} variant="outline" className="border-slate-200 text-slate-600 hover:bg-slate-50">
                    {lang === 'pt' ? 'Fechar' : 'Close'}
                  </Button>
                  {selectedProject.link && (
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-200" onClick={() => window.open(selectedProject.link, '_blank')}>
                      {lang === 'pt' ? 'Acessar Repositório' : 'View Repository'} 
                      <ExternalLink size={16} className="ml-2" />
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      {/* POPUP DE CONTATO REFORMULADO (Envio Silencioso com FormSubmit) */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsContactModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[95vh] md:max-h-[80vh]">
              
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col bg-white overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-bold text-slate-900 text-2xl mb-2">{lang === 'pt' ? 'Envie uma mensagem' : 'Send a message'}</h3>
                    <p className="text-slate-500 text-sm">{lang === 'pt' ? 'Preencha os dados e a mensagem será enviada direto para mim.' : 'Fill out the details and the message will be sent directly to me.'}</p>
                  </div>
                  <button onClick={() => setIsContactModalOpen(false)} className="md:hidden p-2 text-slate-400 hover:text-slate-700 bg-slate-50 rounded-full"><X size={20} /></button>
                </div>

                <form onSubmit={handleSendMessage} className="space-y-5 flex-1">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{lang === 'pt' ? 'Seu Nome' : 'Your Name'}</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-sm" placeholder={lang === 'pt' ? 'João Silva' : 'John Doe'} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{lang === 'pt' ? 'Seu E-mail' : 'Your Email'}</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-sm" placeholder="email@exemplo.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">{lang === 'pt' ? 'Sua Mensagem' : 'Your Message'}</label>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-sm resize-none" placeholder={lang === 'pt' ? 'Olá Lucas, gostaria de falar sobre...' : 'Hi Lucas, I would like to talk about...'} />
                  </div>
                  
                  <Button disabled={isSubmitting} type="submit" className={`w-full text-white font-bold py-6 rounded-xl shadow-lg transition-all ${isSubmitting ? 'bg-violet-400' : 'bg-violet-600 hover:bg-violet-700 shadow-violet-200 active:scale-[0.98]'}`}>
                    {isSubmitting ? (
                      <>{lang === 'pt' ? 'Enviando...' : 'Sending...'} <Loader2 size={18} className="ml-2 animate-spin" /></>
                    ) : (
                      <>{lang === 'pt' ? 'Enviar Mensagem' : 'Send Message'} <Send size={18} className="ml-2" /></>
                    )}
                  </Button>
                </form>
              </div>

              <div className="w-full md:w-2/5 bg-slate-50 p-8 md:p-10 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col relative">
                <button onClick={() => setIsContactModalOpen(false)} className="hidden md:flex absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 hover:bg-white rounded-full transition-colors shadow-sm border border-transparent hover:border-slate-200"><X size={20} /></button>

                <div className="mt-8 md:mt-12 space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{lang === 'pt' ? 'Informações de Contato' : 'Contact Information'}</h4>
                    <div className="flex items-center gap-3 text-slate-600 mb-3">
                      <Mail size={18} className="text-violet-600" />
                      <span className="text-sm font-medium">teixeiralucas793@gmail.com</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{lang === 'pt' ? 'Redes Profissionais' : 'Professional Networks'}</h4>
                    <div className="space-y-3">
                      <a href="https://www.linkedin.com/in/lucas-menezes-teixeira/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors"><LinkedinIcon size={18} /></div>
                        <div><p className="text-sm font-bold text-slate-900">LinkedIn</p><p className="text-[0.7rem] text-slate-500 truncate max-w-[140px]">lucas-menezes-teixeira</p></div>
                      </a>
                      <a href="https://github.com/lucasteixeira793" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-400 hover:shadow-md transition-all group">
                        <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white transition-colors"><GithubIcon size={18} /></div>
                        <div><p className="text-sm font-bold text-slate-900">GitHub</p><p className="text-[0.7rem] text-slate-500 truncate max-w-[140px]">lucasteixeira793</p></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="w-full bg-white border-t border-slate-100 py-10">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} {data.name} — {lang === 'pt' ? 'Desenvolvido com Next.js, Tailwind e Shadcn UI.' : 'Built with Next.js, Tailwind & Shadcn UI.'}
          </p>
        </div>
      </footer>

    </div>
  );
}