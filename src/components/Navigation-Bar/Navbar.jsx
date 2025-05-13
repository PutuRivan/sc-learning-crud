import React from 'react';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const menu = {
  noauth: [
    { name: 'GET', path: '/' },
    { name: 'POST', path: '/tambah-data' },
    { name: 'PUT', path: '/edit-data/1' },
    { name: 'DELETE', path: '/hapus-data/1' },
  ],
  auth: [
    { name: 'GET - auth', path: '/auth/get-data' },
    { name: 'POST - auth', path: '/auth/tambah-data' },
    { name: 'PUT - auth', path: '/auth/update-data/1' },
    { name: 'DELETE - auth', path: '/auth/delete-data/1' },
  ],
};;

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Box bg="gray.800" px={6} py={3} color="gray">
      <Flex justify="space-between" align="center">
        <Button onClick={() => navigate('/')} >
          CRUD-Rest API
        </Button>

        <Flex gap={4}>
          {/* No Auth Dropdown */}
          <Menu>
            <MenuButton as={Button} colorScheme="green">
              No Auth
            </MenuButton>
            <MenuList>
              {menu.noauth.map((item) => (
                <MenuItem key={item.name} onClick={() => navigate(item.path)}>
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {/* Auth Dropdown */}
          <Menu>
            <MenuButton as={Button} colorScheme="blue">
              Auth
            </MenuButton>
            <MenuList>
              {menu.auth.map((item) => (
                <MenuItem key={item.name} onClick={() => navigate(item.path)}>
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>

        <Flex>
          <ButtonGroup>
            <Button colorScheme='blue'>Login</Button>
            <Button colorScheme='green'>Register</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
