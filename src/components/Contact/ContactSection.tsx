import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import { Mail, MapPin, MessageCircle, type LucideProps } from 'lucide-react';
import { socialLinks } from '../../data/social';
import * as LucideIcons from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t('contactSection.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contactSection.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-indigo-900 shadow-xl rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                {t('contactSection.infoTitle')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-800 p-3 rounded-full mr-4">
                    <Mail className="text-indigo-600 dark:text-indigo-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{t('contactSection.email')}</h4>
                    <a 
                      href="mailto:corbellini.personal@gmail.com" 
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      corbellini.personal@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-800 p-3 rounded-full mr-4">
                    <MessageCircle className="text-indigo-600 dark:text-indigo-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{t('contactSection.whatsapp')}</h4>
                    <a
                      href="https://wa.me/59891633183"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-100 dark:bg-green-800 hover:bg-green-200 dark:hover:bg-green-700 text-green-600 dark:text-green-300 font-medium py-2 px-4 rounded transition-colors"
                      aria-label="Chat on WhatsApp"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      <span>{t('contactSection.chatOnWhatsApp')}</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-800 p-3 rounded-full mr-4">
                    <MapPin className="text-indigo-600 dark:text-indigo-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{t('contactSection.location')}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Montevideo, Uruguay
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 dark:text-white mb-4">
                  {t('contactSection.connectWithMe')}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons] as React.FC<LucideProps>;
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-100 dark:bg-indigo-800 hover:bg-indigo-200 dark:hover:bg-indigo-700 p-3 rounded-full transition-colors"
                        aria-label={link.platform}
                      >
                        {IconComponent && <IconComponent className="text-indigo-600 dark:text-indigo-300" size={20} />}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;