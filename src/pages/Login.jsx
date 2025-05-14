import React from 'react'
import LoginForm from '../components/Form/LoginForm'
import { Box, Heading } from '@chakra-ui/react'

export default function Login() {
  return (
    <>
      <Box
        maxW="400px"
        mx="auto"
        mt={20}
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      >

        <Heading mb={6} textAlign="center">
          Login
        </Heading>
        <LoginForm />
      </Box>
    </>
  )
}
