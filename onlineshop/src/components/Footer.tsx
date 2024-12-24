import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return location.pathname === '/' ? (
    <></>
  ) : (
    <div className="relative h-52 bg-slate-950 z-0 text-white">
      <div className="h-full flex justify-around items-center">
        <div className="text-center">
          <p className="font-semibold text-lg mb-3">Contact</p>
          <p>adamkemicer.contact@gmail.com</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg mb-3">Social</p>
          <div className="flex justify-center gap-4">
            <a
              href={'https://github.com/redkorr'}
              target="_blank"
            >
              <img
                width={32}
                height={32}
                src="../../public/github.svg"
              />
            </a>
            <a
              href={'https://www.linkedin.com/in/akemicer/'}
              target="_blank"
            >
              <img
                width={32}
                height={32}
                src="../../public/linkedin.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
