import { Flex, Tag } from '@chakra-ui/react';
import { useRandomColors } from '../../utils/hooks';

export default function TagList({
  tags,
  textColor
}: {
  tags: string[];
  textColor?: string;
}) {
  const colors = useRandomColors(tags.length);
  return (
    <Flex gap={4} justify="start" wrap="wrap">
      {tags.map((tag, idx) => (
        <Tag
          key={idx}
          size="lg"
          bgColor={colors[idx]}
          fontWeight="bold"
          fontSize="md"
          color={textColor ?? 'black'}
        >
          {tag}
        </Tag>
      ))}
    </Flex>
  );
}
