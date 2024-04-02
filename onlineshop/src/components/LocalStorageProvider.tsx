import { loadShoppingCartFromStorage } from '@/features/shoppingCartSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useEffect } from 'react';

interface LocalStorageProviderProps {
  children: React.ReactNode;
}

const LocalStorageProvider = ({ children }: LocalStorageProviderProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadShoppingCartFromStorage(localStorage.getItem('shopping-cart')));
  }, []);
  return <>{children}</>;
};

export default LocalStorageProvider;
