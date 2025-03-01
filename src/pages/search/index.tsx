import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { observer } from 'mobx-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine, RiHomeLine, RiSearchLine } from 'react-icons/ri';

import CollectionListItem from '../../components/CollectionListItem';
import EmptyState from '../../components/EmptyState';
import Loader from '../../components/Loader';
import Search from '../../components/Search';
import countries from '../../constants/countries';
import { useStore } from '../../hooks';

const SearchScreen: NextPage = () => {
  const router = useRouter();
  const { collectionStore } = useStore();
  const { colorMode } = useColorMode();

  const { list, listStatus, searchTerm, searchCountry, getList } = collectionStore;

  const renderList = () => {
    let listContent = null;
    const country = countries.find(({ code }) => code.toLocaleLowerCase() === searchCountry);

    switch (listStatus) {
      case 'fetching': {
        listContent = <Loader />;
        break;
      }

      case 'empty': {
        listContent = (
          <EmptyState
            variant='not-found'
            text={
              searchTerm.trim().length
                ? `Не найдено результатов для "${searchTerm}"${
                    country ? ` in ${country.name}` : ''
                  }. Попробуйте написать по другому.`
                : 'Введите поисковой запрос.'
            }
          />
        );
        break;
      }

      case 'error': {
        listContent = <EmptyState />;
        break;
      }

      case 'success': {
        if (list?.length) {
          listContent = list.map((collection) => (
            <CollectionListItem key={collection.collectionId} collection={collection} />
          ));
        } else {
          listContent = (
            <EmptyState
              variant='not-found'
              text={
                searchTerm.trim().length
                  ? `Не найдено результатов для "${searchTerm}"${
                      country ? ` in ${country.name}` : ''
                    }. Попробуйте написать по-другому.`
                  : 'Введите поисковой запрос.'
              }
            />
          );
        }
        break;
      }

      default: {
        listContent = (
          <EmptyState
            variant='not-found'
            text={
              searchTerm.trim().length
                ? `Не найдено результатов для "${searchTerm}"${
                    country ? ` in ${country.name}` : ''
                  }. Попробуйте написать по-другому.`
                : 'Введите поисковой запрос.'
            }
          />
        );
        break;
      }
    }

    return (
      <Flex direction='column' gap={6} mb={12}>
        {!!searchTerm.trim().length && (
          <Flex
            borderBottomWidth='1px'
            position='sticky'
            top={12}
            py={2}
            backdropFilter='blur(10px)'
            bgColor={
              colorMode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(13, 17, 23, 0.85)'
            }
            zIndex={98}
            gap={2}
          >
            <Icon as={RiSearchLine} fontSize='20px' />
            <Text fontSize='xl' lineHeight={1}>
              {`${!!list?.length ? `${list.length} ` : ''}Результаты поиска для "${searchTerm}"${
                country ? ` in ${country.name}` : ''
              }:`}
            </Text>
          </Flex>
        )}
        <SimpleGrid minChildWidth='163px' gap={3} justifyContent='flex-start'>
          {listContent}
        </SimpleGrid>
      </Flex>
    );
  };

  return (
    <div>
      <Head>
        <title>OnixTunes</title>
        <meta name='description' content='OnixTunes' />
        <meta name='author' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex
        justifyContent='flex-end'
        position='sticky'
        top={0}
        right={0}
        zIndex={99}
        backdropFilter='blur(10px)'
        borderBottomWidth='1px'
        bgColor={colorMode === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(13, 17, 23, 0.85)'}
      >
        <Container
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          py={2}
          px={{ base: 3, md: 6 }}
          w='100%'
          maxW='container.xl'
        >
          <Flex>
            <Flex display={{ base: 'none', md: 'flex' }}>
              <Breadcrumb
                separator={<Icon as={RiArrowLeftSLine} color='gray.500' />}
                sx={{
                  'span, ol': {
                    display: 'flex',
                    alignItems: 'center',
                  },
                }}
              >
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => router.push('/')}>
                    <Flex align='center' gap={2}>
                      <Icon as={RiHomeLine} color='gray.500' fontSize='20px' />
                      <Text>Главная</Text>
                    </Flex>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink as='div' _hover={{ textDecoration: 'none' }} cursor='initial'>
                    <Flex align='center'>
                      <Text>Поиск</Text>
                    </Flex>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
          </Flex>
          <Search
            showCountry
            onChange={getList}
            initialValue={{ term: searchTerm, country: searchCountry }}
            placeholder='Искать подкасты'
          />
        </Container>
      </Flex>

      <Flex as='main'>
        <Container
          display='flex'
          w='100%'
          maxW='container.xl'
          flexDirection='column'
          px={{ base: 3, md: 6 }}
          pt={10}
          pb={36}
        >
          {renderList()}
        </Container>
      </Flex>
    </div>
  );
};

export default observer(SearchScreen);
