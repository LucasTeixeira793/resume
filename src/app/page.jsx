'use client';

import { useState } from 'react';
import { resumeData } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Download, Database, Cloud, Code, Terminal, Layers, BrainCircuit, MessageCircle, GitMerge } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg text-slate-900 tracking-tight italic">
            {data.name}
          </span>
          
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

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-32">
        
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start gap-12 lg:gap-20 justify-between"
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
              Atualmente atuando como desenvolvedor Back-end no Banco Safra SA. Apaixonado por tecnologia, busco desafios que ampliem minhas habilidades em arquitetura de sistemas e soluções escaláveis.
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
        </motion.section>

        <section id="habilidades" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Habilidades</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
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
                  <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
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
        </section>

      </main>
    </div>
  );
}