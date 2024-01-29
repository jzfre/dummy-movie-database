import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

type TPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

type TPaginationElementProps = {
  number: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  children: React.ReactNode;
};

const PaginationElement: React.FC<TPaginationElementProps> = (
  props: TPaginationElementProps,
) => {
  const { number, currentPage, onPageChange, children } = props;
  return (
    <Box mx="1">
      <Button
        size="sm"
        colorScheme="teal"
        variant={currentPage === number ? 'solid' : 'outline'}
        onClick={() => onPageChange(number)}
      >
        {children}
      </Button>
    </Box>
  );
};

const Pagination: React.FC<TPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}: TPaginationProps) => {
  // Array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justifyContent="center" alignItems="center" my="20px">
      {currentPage !== 1 && (
        <PaginationElement
          number={1}
          currentPage={currentPage}
          onPageChange={onPageChange}
        >
          {' '}
          &lt;&lt;
        </PaginationElement>
      )}
      {currentPage - 1 > 0 && (
        <PaginationElement
          number={currentPage - 1}
          currentPage={currentPage}
          onPageChange={onPageChange}
        >
          {' '}
          &lt;
        </PaginationElement>
      )}
      <Box mx="20px">{currentPage}</Box>
      {currentPage + 1 <= totalPages && (
        <PaginationElement
          number={currentPage + 1}
          currentPage={currentPage}
          onPageChange={onPageChange}
        >
          {' '}
          &gt;
        </PaginationElement>
      )}

      {currentPage !== totalPages && (
        <PaginationElement
          number={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        >
          {' '}
          &gt;&gt;
        </PaginationElement>
      )}
    </Flex>
  );
};

export default Pagination;
