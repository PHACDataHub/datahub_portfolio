import { Flex, Tag } from '@chakra-ui/react';
import { useRandomColors } from '../../utils/hooks';

export default function TagList({ tags }: { tags: string[] }) {
  const colors = useRandomColors(tags.length);
  return (
    <Flex gap={4} justify="center" wrap="wrap">
      {tags.map((tag, idx) => (
        <Tag
          key={idx}
          size="lg"
          bgColor={colors[idx]}
          fontWeight="bold"
          fontSize="md"
        >
          {tag}
        </Tag>
      ))}
    </Flex>
  );
}
