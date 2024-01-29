import React from 'react';
import { useQueries } from '@tanstack/react-query';

import { getFavorites } from '@/utils/local-storage';
import { TMovie, buildOMDBApiSearchById } from '@/utils/api';
import Tile from '@/components/Tile';
import { Box, SimpleGrid, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const Favorites: React.FC = () => {
  const favorites = getFavorites();

  const queryResults = useQueries({
    queries: favorites.map((id: string) => ({
      queryKey: ['getMovieById', id],
      queryFn: async () => {
        const result = await fetch(buildOMDBApiSearchById(id));
        return await result.json();
      },
    })),
  });

  if (favorites.length === 0) {
    return <div>No Favorites</div>;
  }

  return (
    <SimpleGrid p={10} minChildWidth="400px" spacing="30px">
      {queryResults.map((result, index) => {
        if (result.isLoading) {
          return (
            <Box key={index} padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          );
        }

        if (result.isError) {
          return null;
        }

        if (result.isSuccess) {
          return <Tile key={index} title={result.data as TMovie} />;
        }

        return null;
      })}
    </SimpleGrid>
  );
};

export default Favorites;
