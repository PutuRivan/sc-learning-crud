import { Button, FormControl, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router'

export default function LoginForm() {
  const handleSubmit = () => {
    console.log("submited")
  }
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
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
          Login
        </Button>
        <Text>
          Don't have an account?{' '}
          <Text as="span" color="blue.600">
            <Link to="/register">Register</Link>
          </Text>
        </Text>
      </Stack>
    </form>
  )
}
