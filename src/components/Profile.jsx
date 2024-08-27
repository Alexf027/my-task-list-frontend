import { Avatar, Center, Input } from '@chakra-ui/react';

export const Profile = () => {

  return (
    <Center>
      <Avatar
        ml={4}
        size="lg"
        cursor="pointer"
      />
      <Input
        type="file"
        hidden
        accept="image/*"
      />
    </Center>
  );
};
