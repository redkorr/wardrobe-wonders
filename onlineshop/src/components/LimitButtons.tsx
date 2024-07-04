import { setLimit, setPage } from '@/features/paginationSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LimitButtons = () => {
  const dispatch = useAppDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const limit = useAppSelector((state) => state.pagination.limit);

  useEffect(() => {
    urlParams.set('limit', limit.toString());
    navigate(`?${urlParams.toString()}`);
  }, [limit]);
  const handleLimitChange = (limitValue: number) => {
    dispatch(setPage(1));
    dispatch(setLimit(limitValue));
    urlParams.set('page', '1');
    urlParams.set('limit', limitValue.toString());
    navigate(`?${urlParams.toString()}`);
  };
  return (
    <div className="flex flex-row-reverse items-center w-full text-xl mb-4 gap-2">
      <button onClick={() => handleLimitChange(15)}>15</button>
      <button onClick={() => handleLimitChange(10)}>10</button>
      <button onClick={() => handleLimitChange(5)}>5</button>
    </div>
  );
};

export default LimitButtons;
