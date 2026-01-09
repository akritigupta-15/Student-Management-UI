import {
  Button,
  Card,
  Center,
  Field,
  Input,
  Splitter,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";

const SignUp = () => {

  const[firstName,setFirstName] = useState('');
  const[lastName,setLastName] = useState('');
  const[email,setEmail] = useState('');
  const[pass,setPass] = useState('');

  const handleSubmit = (e) => {
    console.log("Form submitted");
    e.preventDefault();
  };

  return (
    <Center minH="100vh" bg="gray.50">
      <Splitter.Root
        panels={[{ id: "a" }, { id: "b" }]}
        maxW="800px"
        maxH="500px"
        w="100%"
        h="100%"
        bg="white"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        mt="30px"
      >
        {/* LEFT PANEL – FORM */}
        <form onSubmit={handleSubmit}>
          <Splitter.Panel id="a" flex="1">
          <Card.Root h="100%" border="none" boxShadow="none">
            <Card.Header>
              <Card.Title>Sign up</Card.Title>
              <Card.Description>
                Fill in the form below to create an account
              </Card.Description>
            </Card.Header>

            <Card.Body>
              <Stack gap="4" w="full">
                <Field.Root>
                  <Field.Label>First Name</Field.Label>
                  <Input value={firstName} onChange={(e)=>setFirstName()}/>
                </Field.Root>

                <Field.Root>
                  <Field.Label>Last Name</Field.Label>
                  <Input value={lastName} onChange={(e)=>setLastName()}/>
                </Field.Root>

                <Field.Root>
                  <Field.Label>Email</Field.Label>
                  <Input type="email" value={email} onChange={(e)=>setEmail()} />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Password</Field.Label>
                  <Input type="password" value={pass} onChange={(e)=>setPass()}/>
                </Field.Root>
              </Stack>
            </Card.Body>

            <Card.Footer justifyContent="flex-end">
              <Button colorScheme="blackAlpha" onClick={handleSubmit}>
                Sign in
              </Button>
            </Card.Footer>
          </Card.Root>
        </Splitter.Panel>
        </form>
        

        {/* RIGHT PANEL – IMAGE */}
        <Splitter.Panel id="b" flex="1" overflow="hidden">
          <Image
            src="/image/blue.png"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Splitter.Panel>
      </Splitter.Root>
    </Center>
  );
};

export default SignUp;
