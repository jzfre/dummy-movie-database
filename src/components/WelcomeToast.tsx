import React, { useEffect, memo } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { setFirstVisitFalse } from '@/store/common.slice';

const WelcomeToast: React.FC = () => {
  const isFirstVisit = useAppSelector((state) => state.common.firstVisit);
  const dispatch = useAppDispatch();
  const toast = useToast();

  useEffect(() => {
    if (isFirstVisit) {
      toast({
        title: 'Welcome!',
        description:
          'You can always return to homepage by simple clicking on the logo, in the top left corner',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
      dispatch(setFirstVisitFalse());
    }
  }, [toast, isFirstVisit, dispatch]);

  return null;
};

const MemoizedWelcomeToast = memo(WelcomeToast);

export default MemoizedWelcomeToast;
