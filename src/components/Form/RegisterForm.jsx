import React from 'react'
import { Button, FormControl, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router'

export default function RegisterForm() {
  const handleSubmit = () => {
    console.log("submited")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="Username"
            placeholder="Your Username"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="you@example.com"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            placeholder="********"
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" width="full">
          Register
        </Button>
        <Text textAlign={"center"}>Already have an account?
          <Text as="span" color="blue.500">
            <Link to="/login">Login</Link>
          </Text>
        </Text>
      </Stack>
    </form>
  )
}
