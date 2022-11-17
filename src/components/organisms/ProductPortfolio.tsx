import { Heading, HStack, VStack } from '@chakra-ui/react';
import { productList } from '../../data/productList';
import { useSmallScreen } from '../../utils/hooks';
import ProductCard from '../molecules/ProductCard';

export default function ProductPortfolio() {
  const isSmallScreen = useSmallScreen();
  return (
    <VStack spacing={16}>
      <Heading fontSize={isSmallScreen ? 20 : 24} mt={10}>
        Products
      </Heading>
      <HStack wrap="wrap" w="95%" justify="center">
        {productList.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </HStack>
    </VStack>
  );
}
