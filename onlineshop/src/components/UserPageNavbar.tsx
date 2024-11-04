import { Dispatch } from 'react';

interface UserPageNavbarProps {
  setIndex: Dispatch<React.SetStateAction<number>>;
  index: number;
}

const UserPageNavbar = ({ setIndex, index }: UserPageNavbarProps) => {
  return (
    <div className="flex gap-4">
      <button
        className="p-4 hover:text-slate-600 transition duration-200 ease-in-out"
        style={
          index === 0
            ? { borderBottom: '1px solid', fontSize: '18px', fontWeight: '600' }
            : { borderBottom: '0', fontSize: '16px', fontWeight: '400' }
        }
        onClick={() => setIndex(0)}
      >
        My Account
      </button>
      <button
        className="p-4 hover:text-slate-600 transition duration-200 ease-in-out"
        style={
          index === 1
            ? { borderBottom: '1px solid', fontSize: '18px', fontWeight: '600' }
            : { borderBottom: '0', fontSize: '16px', fontWeight: '400' }
        }
        onClick={() => setIndex(1)}
      >
        My Orders
      </button>
    </div>
  );
};

export default UserPageNavbar;
