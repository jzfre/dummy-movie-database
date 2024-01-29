import React, { useEffect, useState } from 'react';
import { Text, Input, Flex } from '@chakra-ui/react';

import { setTerm } from '@/store/common.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import useDebounce from '@/hooks/useDebounce';

const Search: React.FC = () => {
  const searchTerm = useAppSelector((state) => state.common.term);
  const [value, setValue] = useState(searchTerm);

  const debouncedSearchTerm = useDebounce(value, 300);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTerm({ term: debouncedSearchTerm }));
  }, [dispatch, debouncedSearchTerm]);

  return (
    <Flex width="100%" style={{ alignItems: 'center' }} mb={4}>
      <Text fontWeight="700" fontSize={'1.5rem'} mr={4}>
        Search
      </Text>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        _placeholder={{ color: 'white' }}
        placeholder="try to find something.."
        size="lg"
        width={{ base: '100%' }}
      />
    </Flex>
  );
};

export default Search;
