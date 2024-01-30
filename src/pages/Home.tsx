import React from 'react';
import { useQuery } from '@tanstack/react-query';

import MoviesGrid from '@/components/MoviesGrid';
import { buildOMDBApiSearchByString } from '@/utils/api';
import { Box, Flex, Heading, Highlight } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import Search from '@/components/Search';
import Pagination from '@/components/Pagination';
import { setPageNumber } from '@/store/common.slice';

const movies = ['Batman', 'Spider-Man', 'Superman'];

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const searchTerm = useAppSelector((state) => state.common.term);
  const pageNumber = useAppSelector((state) => state.common.pageNumber);

  const randomMovie = Math.floor(Math.random() * movies.length);
  const term = searchTerm !== '' ? searchTerm : movies[randomMovie];

  const { isPending, isSuccess, isError, data } = useQuery({
    queryKey: ['getMoviesBySearchTerm', term, pageNumber],
    queryFn: async () => {
      const rs = await fetch(
        buildOMDBApiSearchByString(term, searchTerm !== '' ? pageNumber : 1),
      );
      const result = await rs.json();
      if (result.Response === 'True') {
        return result;
      }
      return [];
    },
  });

  return (
    <Box p={10}>
      <Search />
      <Heading lineHeight="tall" mb={10}>
        {searchTerm !== '' ? (
          <Highlight query={searchTerm} styles={highlightStyles}>
            {`Displaying results for ${searchTerm}`}
          </Highlight>
        ) : (
          <Highlight query={'nice movies'} styles={highlightStyles}>
            {`What about some of these nice movies? Or try something else
        by using the searchbox`}
          </Highlight>
        )}
      </Heading>
      {isPending && <MoviesGrid pending />}
      {isSuccess && (
        <>
          <MoviesGrid movies={data.Search} />
          {searchTerm !== '' && data && data.Search && (
            <Pagination
              currentPage={pageNumber}
              totalPages={Math.ceil(data.totalResults / 10)}
              onPageChange={(pageNumber: number) => {
                dispatch(setPageNumber({ pageNumber }));
              }}
            />
          )}
        </>
      )}
      {isError && (
        <Flex pt="5rem" justifyContent="center" alignItems="center">
          There has been an error.. Sorry about that
        </Flex>
      )}
    </Box>
  );
};

export default Home;

const highlightStyles = { px: '2', py: '1', rounded: 'full', bg: 'red.100' };
