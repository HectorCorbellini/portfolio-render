import React from 'react';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../../data/social';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footerSection.name')}</h3>
            <p className="mb-4">{t('footerSection.description')}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons] as React.FC<LucideProps>;
                return (
                  <a 
                    key={link.platform} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-300 hover:text-white transition-colors"
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footerSection.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-indigo-300 transition-colors">{t('nav.home')}</a></li>
              <li><a href="#projects" className="hover:text-indigo-300 transition-colors">{t('nav.projects')}</a></li>
              <li><a href="#skills" className="hover:text-indigo-300 transition-colors">{t('nav.skills')}</a></li>
              <li><a href="#about" className="hover:text-indigo-300 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#contact" className="hover:text-indigo-300 transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footerSection.contact')}</h3>
            <p className="mb-2">{t('footerSection.feelFree')}</p>
            <a 
              href="#contact" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors mt-2"
            >
              {t('footerSection.getInTouch')}
            </a>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-6 text-center">
          <div className="mb-4">
            <p className="text-lg font-medium mb-2">{t('footerSection.sourceCodePrompt')}</p>
            <a
              href="https://github.com/HectorCorbellini/portfolio-render"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors"
            >
              {t('footerSection.viewSourceCode')}
            </a>
          </div>
          <p>&copy; {currentYear} {t('footerSection.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;