import type { NextPage } from 'next';
import { observer } from 'mobx-react';
import { ColorModeProvider } from '@chakra-ui/react';
import {
  Container,
  Square,
  Box,
  Flex,
  Icon,
  Text,
  Image,
  Badge,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';

const About: NextPage = () => {
  return (
    <Flex align='center' alignItems='center' justifyContent='center' mt={4}
    bgImage="/about-bg.jpg" bgPosition="top" bgRepeat="no-repeat" bgSize="cover"
    >
      <Flex
        w='100%'
        minW={240}
        maxW={['80%','80%','80%','80%','50%','50%']}
        direction='column'
        gap={4}
        textAlign='center'
        minH='100vh'
      >
        <Text fontSize='2xl' lineHeight={1} mb={2} fontWeight='semibold' mt={8} color='white'>
          Мы - команда OnixTunes
        </Text>
        <Text fontSize='xl' mb={2} fontWeight={300} color='white' mt={6}>
          Наш сайт предоставляет возможность поиска и прослушивания подкастов со всего мира.
        </Text>
        <Text fontSize='xl' mb={2} fontWeight={300} color='white'>
          Независимо от вашего вкуса или интересов, у нас вы найдете широкий выбор подкастов на
          различные темы, включая новости, развлечения, образование, технологии и многое другое.
        </Text>
        <Text fontSize='xl' mb={2} fontWeight={300} color='white'>
          Пользуйтесь нашим удобным поиском, чтобы найти и прослушать понравившиеся подкасты, и
          наслаждайтесь увлекательным контентом, созданным талантливыми подкастерами со всего
          мира
        </Text>
      </Flex>
    </Flex>
  );
};
export default observer(About);
