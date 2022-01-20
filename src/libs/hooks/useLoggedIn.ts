import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAPI } from '../api/auth';

export default function useLoggedIn() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAPI());
  }, []);
}
