import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SkillBar from './SkillBar';
import { skills } from '../../data/skills';

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categoryIds = ['all','languages','frontend','backend','database','tools'] as const;
  const categories = categoryIds.map(id => ({ id, name: t(`skillsSection.categories.${id}`) }));

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-indigo-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('skillsSection.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('skillsSection.description')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-indigo-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-indigo-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <SkillBar 
              key={skill.name} 
              skill={skill} 
              delay={index * 100}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;