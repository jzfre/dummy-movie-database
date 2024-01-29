import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

import { TMovie } from '@/utils/api';
import Tile from './Tile';

interface TMoviesGridProps {
  movies?: TMovie[];
  pending?: boolean;
}

const MoviesGrid: React.FC<TMoviesGridProps> = (props: TMoviesGridProps) => {
  const { movies, pending } = props;

  if (pending) {
    return (
      <SimpleGrid minChildWidth="400px" spacing="30px">
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      </SimpleGrid>
    );
  }

  if (movies && movies.length === 0) {
    return (
      <Flex pt="5rem" width="100%" justifyContent="center" alignItems="center">
        Unfortunately, no movies found..
      </Flex>
    );
  }

  if (movies) {
    return (
      <SimpleGrid minChildWidth="400px" spacing="30px">
        {movies.map((m) => (
          <Tile key={m.imdbID} title={m} />
        ))}
      </SimpleGrid>
    );
  }
};

export default MoviesGrid;
