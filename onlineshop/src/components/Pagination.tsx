import { decrementPageNumber, incrementPageNumber } from '@/features/paginationSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PaginationProps {
  numberOfPages: number | undefined;
}

const Pagination = ({ numberOfPages }: PaginationProps) => {
  const page = useAppSelector((state) => state.pagination.page);
  const dispatch = useAppDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  useEffect(() => {
    urlParams.set('page', page.toString());
    navigate(`?${urlParams.toString()}`);
  }, [page]);

  return (
    <div className="flex flex-row-reverse items-center w-full text-xl mb-4">
      <button onClick={() => dispatch(incrementPageNumber(numberOfPages))}>
        <ChevronRight className="w-8 h-8" />
      </button>

      <p className="h-8">
        {page}/{numberOfPages}
      </p>

      <button
        className="w-8"
        onClick={() => dispatch(decrementPageNumber())}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Pagination;
