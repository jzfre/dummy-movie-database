import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { TMovie } from '@/utils/api';
import { useNavigate } from 'react-router-dom';

type TTileProps = {
  title: TMovie;
};

const Tile: React.FC<TTileProps> = (props: TTileProps) => {
  const { Title, Year, Type, Poster, imdbID } = props.title;
  const navigate = useNavigate();
  
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      maxWidth={{ base: '300px', sm: '500px' }}
    >
      <Image
        objectFit="cover"
        maxW={{ base: '300px', sm: '220px' }}
        src={Poster}
        alt={`${Title} poster`}
      />

      <Stack>
        <CardHeader>
          <Heading size="md">
            {Title} ({Year})
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>
            <strong>Type: {Type}</strong>
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            praesentium...
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue" onClick={() => navigate(`/detail/${imdbID}`)}>
            Detail
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Tile;
