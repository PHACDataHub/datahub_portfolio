import { useMediaQuery } from '@chakra-ui/react';

export const useSmallScreen = (): boolean => {
  const [bigScreen] = useMediaQuery('(min-width: 800px)');
  return !bigScreen;
};

export const useRandomColors = (count: number): string[] => {
  const colors = [
    'brand.bluegreenlight',
    'brand.greenlight',
    'brand.yellowlight',
    'brand.pink',
    'brand.bluegreendark',
    'brand.turquoise',
    'brand.orange',
    'brand.yellowdark',
    'brand.greendark',
    'brand.blue',
    'brand.purple',
    'brand.red'
  ];
  return colors.sort(() => 0.5 - Math.random()).slice(0, count);
};
