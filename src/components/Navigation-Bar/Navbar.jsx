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
  ],
  auth: [
    { name: 'GET - auth - cookie', path: '/auth/get-data' },
    { name: 'POST - auth - cookie', path: '/auth/tambah-data' },
    { name: 'PUT - auth - cookie', path: '/auth/update-data/1' },
    { name: 'DELETE - auth - cookie', path: '/auth/delete-data/1' },
  ],
  authJwt: [
    { name: 'GET - auth - jwt', path: '/jwt/auth/get-data' },
    { name: 'POST - auth - jwt', path: '/jwt/auth/tambah-data' },
    { name: 'PUT - auth - jwt', path: '/jwt/auth/update-data/1' },
    { name: 'DELETE - auth - jwt', path: '/jwt/auth/delete-data/1' },
  ]
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
              Auth Cookie
            </MenuButton>
            <MenuList>
              {menu.auth.map((item) => (
                <MenuItem key={item.name} onClick={() => navigate(item.path)}>
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          {/* Auth JWT */}
          <Menu>
            <MenuButton as={Button} colorScheme="blue">
              Auth JWT
            </MenuButton>
            <MenuList>
              {menu.authJwt.map((item) => (
                <MenuItem key={item.name} onClick={() => navigate(item.path)}>
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>

        <Flex>
          <ButtonGroup>
            <Button colorScheme='blue' onClick={() => navigate('/login')}>Login</Button>
            <Button colorScheme='green' onClick={() => navigate('/register')}>Register</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
