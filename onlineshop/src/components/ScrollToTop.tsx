import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-16 right-20 bg-slate-950 text-gray-300 p-3 rounded-full hover:bg-slate-800 hover:text-slate-100 transition duration-200 ease-in-out"
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <ArrowUp className=" h-12 w-12 p-0" />
    </button>
  );
};

export default ScrollToTopButton;
