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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';

const Faq: NextPage = () => {
  return (
    <Flex
      align='center'
      alignItems='center'
      justifyContent='center'
      mt={4}
      bgImage='/about-bg.jpg'
      bgPosition='top'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Flex
        w='100%'
        minW={240}
        maxW={['80%', '80%', '80%', '80%', '50%', '50%']}
        direction='column'
        gap={4}
        textAlign='center'
        minH='100vh'
      >
        <Text fontSize='2xl' lineHeight={1} mb={2} fontWeight='semibold' mt={8} color='white'>
          Как пользоваться сервисом
        </Text>

        <Accordion mt={12}>
          {/* Как найти подкаст */}
          <AccordionItem borderColor='cyan.300'>
            <h2>
              <AccordionButton _expanded={{ bg: 'cyan.900', color: 'white' }}>
                <Box as='span' flex='1' textAlign='left' color='white'>
                  Как найти подкаст
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel style={{ textAlign: 'left' }} color='white' bg='cyan.700'>
              Чтобы найти подкаст определенной тематики:
              <br /> 1) перейдите на главную страницу
              <br /> 2) в выпадающем списке выберите страну
              <br /> 3) в поле поиска введите ключевое слово
            </AccordionPanel>
          </AccordionItem>

          {/* Как посмотреть информацию по подкасте */}
          <AccordionItem borderColor='cyan.300'>
            <h2>
              <AccordionButton _expanded={{ bg: 'cyan.900', color: 'white' }}>
                <Box as='span' flex='1' textAlign='left' color='white'>
                  Как посмотреть информацию по подкасте
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel style={{ textAlign: 'left' }} color='white' bg='cyan.700'>
              Чтобы просмотреть информацию о подкасте нажмите на три точки в правом нижнем углу,
              <br />
              после чего откроется всплывающее окно, в котором выберите -Информация-. <br />
              После этого должно открыться модальное окно с информацией о подкасте.
            </AccordionPanel>
          </AccordionItem>

          {/* Как добавить подкаст в избранное */}
          <AccordionItem borderColor='cyan.300'>
            <h2>
              <AccordionButton _expanded={{ bg: 'cyan.900', color: 'white' }}>
                <Box as='span' flex='1' textAlign='left' color='white'>
                  Как добавить подкаст в избранное
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel style={{ textAlign: 'left' }} color='white' bg='cyan.700'>
              Чтобы добавить подкаст в избранное нажмите на три точки в правом нижнем углу,
              <br />
              после чего откроется всплывающее окно, в котором выберите -Добавить в избранное-.{' '}
              <br />
              После этого должно открыться модальное окно с информацией о подкасте.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* <Text fontSize='xl' mb={2} fontWeight={300} color='white' mt={6}>
          Наш сайт предоставляет возможность поиска и прослушивания подкастов со всего мира.
        </Text> */}
      </Flex>
    </Flex>
  );
};
export default observer(Faq);
