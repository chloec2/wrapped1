import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaLink } from 'react-icons/fa';
import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';

const ShareButtons = () => {
    return (
        
        <Center p={8}>
        <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
          {/* Facebook */}
          <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
            <Center>
              <Text>Share with Facebook</Text>
            </Center>
          </Button>
  
          {/* Google */}
          <Button w={'full'} variant={'outline'} bgGradient={'radial(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'} color={'white'} leftIcon={<GrInstagram color={'white'} />}>
            <Center>
              <Text>Share with Instagram</Text>
            </Center>
          </Button>
  
          {/* LinkedIn */}
          <Button w={'full'} color={'black'} bgColor={'gray.200'} leftIcon={<FaLink />}>
            <Center>
              <Text>Copy URL</Text>
            </Center>
          </Button>
  
        </Stack>
      </Center>

    )
}

export default ShareButtons
