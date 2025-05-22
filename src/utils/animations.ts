// Utility to inject and remove CSS animations
export function injectAnimations(): () => void {
  const style = document.createElement('style');
  style.setAttribute('data-generated', 'fade-animations');
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.6s ease-out forwards;
    }
    
    .animate-fadeInDelay {
      opacity: 0;
      animation: fadeIn 0.6s ease-out 0.3s forwards;
    }
    
    .animate-fadeInDelayLong {
      opacity: 0;
      animation: fadeIn 0.6s ease-out 0.6s forwards;
    }
  `;
  document.head.appendChild(style);
  return () => {
    document.head.removeChild(style);
  };
}
