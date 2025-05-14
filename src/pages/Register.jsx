import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import RegisterForm from '../components/Form/RegisterForm'

export default function Register() {
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
          Register
        </Heading>
        <RegisterForm />
      </Box>
    </>
  )
}
