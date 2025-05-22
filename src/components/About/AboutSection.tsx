import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Code, Database, Cpu } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-indigo-50 dark:bg-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('aboutSection.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('aboutSection.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="w-full h-full absolute -top-4 -left-4 border-2 border-indigo-500 rounded-lg"></div>
              <img 
                src="/files/yoFoto2020ago~2.png" 
                alt="Héctor Corbellini" 
                className="w-full rounded-lg relative z-10 shadow-lg"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Héctor Corbellini
            </h3>
            <p className="text-indigo-600 dark:text-indigo-400 text-lg mb-6">
              {t('aboutSection.subtitle')}
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('aboutSection.paragraph1')}
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t('aboutSection.paragraph2')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">{t('aboutSection.features.cleanCode')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t('aboutSection.features.cleanCodeDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">{t('aboutSection.features.cleanArchitecture')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t('aboutSection.features.cleanArchitectureDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                  <Database className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">{t('aboutSection.features.databaseDesign')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t('aboutSection.features.databaseDesignDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-600 p-3 rounded-lg mr-4">
                  <Cpu className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">{t('aboutSection.features.aiExcellence')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t('aboutSection.features.aiExcellenceDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;