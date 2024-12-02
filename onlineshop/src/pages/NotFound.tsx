import undraw_void from '@/assets/undraw_void.svg';

const NotFound = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <img
        src={undraw_void}
        alt="No products"
        className=" w-80 h-80"
      />
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-6xl">404 Error</h1>
        <p>This page doesn't exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
