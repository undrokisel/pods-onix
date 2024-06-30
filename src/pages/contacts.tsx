import type { NextPage } from 'next';
import { observer } from 'mobx-react';
import { ColorModeProvider } from '@chakra-ui/react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { HiBuildingOffice2 } from 'react-icons/hi2';

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

const YandexURL = `https://yandex.ru/map-widget/v1/?ll=56.227424%2C58.004138&
mode=poi&poi%5Bpoint%5D=56.221126%2C58.002848&
poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1064300558&z=16.58`;

const Contacts: NextPage = () => {
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
        maxW='80%'
        direction='column'
        gap={4}
        textAlign='center'
        alignItems='center'
        minH='100vh'
      >
        <Text fontSize='2xl' lineHeight={1} mb={2} fontWeight='semibold' mt={8} color='white'>
          Контакты
        </Text>

        <Flex align='center' gap={4} userSelect='none' alignItems='center' direction={['column', 'column', 'row']}>
          <Flex align='center' gap={4} userSelect='none' alignItems='center'>
            <Icon as={FiPhoneCall} fontSize='36px' color='white' />
            <Text fontSize='xl' fontWeight={300} color='white'>
              8-912-98-89-839
            </Text>
          </Flex>

          <Flex align='center' gap={4} userSelect='none' alignItems='center'>
            <Icon as={MdOutlineEmail} fontSize='36px' color='white' />
            <Text fontSize='xl' fontWeight={300} color='white'>
              onixTunes@yandex.com
            </Text>
          </Flex>
        </Flex>

        <Flex align='center' gap={4} userSelect='none' alignItems='center'>
          <Icon as={HiBuildingOffice2} fontSize='36px' color='white' />
          <Text fontSize='xl' fontWeight={300} color='white'>
            г. Пермь, ул. Пушкина, д. 113.
          </Text>
        </Flex>

        <Flex
          gap={4}
          userSelect='none'
          bg={'black'}
          w={{
            base: '100%', // 0-48em
            md: '80%', // 48em-80em,
            xl: '50%', // 80em+
          }}
          minH={{
            base: '200px', // 0-48em
            md: '300px', // 48em-80em,
            xl: '350px', // 80em+
          }}
          borderRadius="15px"
          overflow="hidden"
          mt={8}
        >
          <iframe
            title='yandex-map'
            src={YandexURL}
            width='100%'
            height='100%'
            style={{ border: 'none', position: 'relative', minHeight: '350px' }}
          ></iframe>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default observer(Contacts);
