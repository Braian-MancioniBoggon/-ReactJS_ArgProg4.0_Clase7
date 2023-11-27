import React from 'react'
import { Box, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component'

const Galeria = ({ imagenes, paginaSiguiente, masImagenes }) => {

    return(
      <Box pt="80px" mb="30px" w="100%">
        <InfiniteScroll  dataLength={imagenes.length} next={paginaSiguiente} hasMore={masImagenes} endMessage={<Text textAlign="center">Sin resultados para mostrar.</Text>}>
          <Grid gridAutoRows="25rem" gridTemplateColumns="repeat(auto-fill, minmax(min(100%, 20rem), 1fr))" w="100%" gap="1rem">
            {imagenes.map((imagen, indice) => {
              return (
                <GridItem key={indice} boxShadow="0px 4px 10px rgba(0,0,0,0.20)" textAlign="center" float="left" display="grid" placeItems="center" overflow="hidden" >
                  <Image objectFit="cover" aspectRatio="1" w="100%" h="100%" objectPosition="center center" src={imagen.urls.small} />
                </GridItem>
              )
            })}
          </Grid>
        </InfiniteScroll>
      </Box>
    )
}

export { Galeria }