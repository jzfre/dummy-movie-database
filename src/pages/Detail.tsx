import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Badge,
  Button,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from '@/utils/local-storage';
import { buildOMDBApiSearchById } from '@/utils/api';

const Detail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = React.useState(() => {
    return new Set(getFavorites()).has(String(id));
  });

  const { isPending, isError, data } = useQuery({
    queryKey: ['getMovieById', id],
    queryFn: async () => {
      const result = await fetch(buildOMDBApiSearchById(id!));
      return await result.json();
    },
    enabled: Boolean(id),
  });

  const handleBtnClick = (id: string) => {
    if (isFavorite) {
      removeFromFavorites(id);
      setIsFavorite(false);
    } else {
      addToFavorites(id);
      setIsFavorite(true);
    }
  };

  if (isPending) {
    return (
      <Box p={5}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Skeleton width={{ base: '100%', md: '300px' }} height="450px" />

          <Box flex="1" ml={{ md: 5 }}>
            <Skeleton height="40px" width="200px" mb={4} />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
            <Skeleton height="20px" width="150px" mt={5} />
            <Skeleton height="20px" width="150px" mt={3} />
            <Skeleton height="20px" width="150px" mt={3} />
            <Skeleton height="20px" width="150px" mt={3} />
            <Skeleton height="20px" width="150px" mt={3} />
            <Skeleton height="20px" width="100px" mt={3} />
            <Skeleton height="20px" width="200px" mt={3} />
            <Skeleton height="20px" width="300px" mt={3} />
          </Box>
        </Flex>
      </Box>
    );
  }

  if (isError) {
    return (
      <Flex pt="5rem" justifyContent="center" alignItems="center">
        There has been an error.. Sorry about that
      </Flex>
    );
  }

  return (
    <Box p={5}>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex direction="column" alignItems="center">
          <Image src={data.Poster} alt={data.Title} borderRadius="md" />
          <Button
            width="100%"
            mt={2}
            colorScheme="blue"
            onClick={() => handleBtnClick(data.imdbID)}
          >
            {!isFavorite ? 'Add to favorites' : 'Remove from favorites'}
          </Button>
          {/* <Button
            width="100%"
            mt={2}
            colorScheme="blue"
            onClick={() => navigate('/')}
          >
            Back to homepage
          </Button> */}
        </Flex>
        <Box flex="1" ml={{ md: 5 }}>
          <Heading as="h1" size="xl" mb={2}>
            {data.Title}
          </Heading>
          <Text fontSize="lg" mb={2}>
            {data.Plot}
          </Text>
          <Text fontWeight="bold">Director: </Text>
          <Text as="span">{data.Director}</Text>
          <br />
          <Text fontWeight="bold">Genre: </Text>
          <Text as="span">{data.Genre}</Text>
          <br />
          <Text fontWeight="bold">Runtime: </Text>
          <Text as="span">{data.Runtime}</Text>
          <br />
          <Text fontWeight="bold">Released: </Text>
          <Text as="span">{data.Released}</Text>
          <br />
          <Text fontWeight="bold">Box Office: </Text>
          <Text as="span">{data.BoxOffice}</Text>
          <br />
          <Text fontWeight="bold">IMDb Rating: </Text>
          <Badge colorScheme="green">{data.imdbRating}</Badge>
          <br />
          <Text fontWeight="bold">IMDb Votes: </Text>
          <Text as="span">{data.imdbVotes}</Text>
          <br />
          <Text fontWeight="bold">Awards: </Text>
          <Text as="span">{data.Awards}</Text>
          <br />
          <Text fontWeight="bold">Actors: </Text>
          <Text as="span">{data.Actors}</Text>
          <br />
          <Text fontWeight="bold">Writer: </Text>
          <Text as="span">{data.Writer}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Detail;
