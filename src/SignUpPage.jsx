import {
  Button,
  Card,
  Center,
  Field,
  Input,
  Splitter,
  Stack,
  Image,
  FieldRequiredIndicator,
} from "@chakra-ui/react";
import { useState } from "react";
const SignUp = () => {

  const[firstName,setFirstName] = useState('');
  const[lastName,setLastName] = useState('');
  const[email,setEmail] = useState('');
  const[pass,setPass] = useState('');
  const[submitted,setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    console.log({firstName,lastName,email,pass});
    e.preventDefault();
    setSubmitted(true);

    if(!firstName || !lastName || !email) return;

    console.log({firstName,lastName,email,pass});
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
          <Splitter.Panel id="a" flex="1">
          <form onSubmit={handleSubmit} noValidate>
          <Card.Root h="100%" border="none" boxShadow="none">
            <Card.Header>
              <Card.Title>Sign up</Card.Title>
              <Card.Description>
                Fill in the form below to create an account
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <Stack gap="4" w="full">
                <Field.Root required>
                  <Field.Label>First Name
                    <FieldRequiredIndicator/>
                  </Field.Label>
                  <Input 
                     placeholder="Enter you first name"
                     value={firstName} 
                     onChange={(e)=>setFirstName(e.target.value)}/>
                     {submitted && firstName.trim() === "" && <Field.ErrorText>First Name is Required</Field.ErrorText>}
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Last Name
                    <FieldRequiredIndicator/>
                  </Field.Label>
                  <Input 
                     placeholder="Enter your last name"
                     value={lastName} 
                     onChange={(e)=>setLastName(e.target.value)}/>
                     {submitted && lastName.trim()===""&& <Field.ErrorText>Last Name is Required</Field.ErrorText>}
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Email
                    <FieldRequiredIndicator/>
                  </Field.Label>
                  <Input 
                     type="email" 
                     value={email} 
                     onChange={(e)=>setEmail(e.target.value)}/>
                     {submitted && email.trim()===""&&<Field.ErrorText>Email is Required</Field.ErrorText>}
                </Field.Root>

                <Field.Root>
                  <Field.Label>Password</Field.Label>
                  <Input 
                     type="password"
                     value={pass} 
                     onChange={(e)=>setPass(e.target.value)}/>
                </Field.Root>
              </Stack>
            </Card.Body>

            <Card.Footer justifyContent="flex-end">
              <Button type="submit" colorScheme="blackAlpha">
                Sign in
              </Button>
            </Card.Footer>
          </Card.Root>
          </form>
        </Splitter.Panel>
        

        {/* RIGHT PANEL – IMAGE */}
        <Splitter.Panel id="b" flex="1">
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
