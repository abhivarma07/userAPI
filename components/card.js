import React from 'react';
import {
  Box,
  AspectRatio,
  Center,
  Stack,
  Image,
  Heading,
  Text,
  HStack,
} from 'native-base';
import { StyleSheet } from 'react-native';
import moment from 'moment';

const Card = ({details}) => {
  return (
    <Box alignItems="center">
      <Box
        maxH={500}
        maxW={500}
        height={400}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Box backgroundColor={"#4f8a8b"} style = {{justifyContent: "center" , alignItems : "center",  height:200}} >
            <Image
              source={{
                uri: details.picture?.large,
              }}
              alt="image"
              resizeMode = {"contain"}
              borderRadius = {20}
              style = {styles.image}
            />
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'lg',
            }}
            position="absolute"
            bottom="0.5"
            px="4"
            py="1"
            flexDirection={"row"}
            borderRadius={20}>
             {details.login?.username}
          </Center>
        </Box>
        <Stack p="4" space={2} alignItems="center" justifyContent={"center"}>
          <Stack space={2} alignItems="center" justifyContent={"center"}>
            <Heading size="md" ml="-1">
            {details.name?.title} {details.name?.first} {details?.name.last}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
              >
              Phone : {details.phone}
            </Text>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              Email : {details.email}
            </Text>
          </Stack>
          <Text fontWeight="400">
            State : {details.location?.state}
          </Text>
          <Text fontWeight="400">
          Country : {details.location?.country}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400">
                Registered at {moment(details.registered?.text).format('DD-MM-YY')}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#fbd46d',
        marginTop: -30,
      },
})
