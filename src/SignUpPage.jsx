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
import { toaster } from "./components/ui/toaster";
import { useState } from "react";
import { PasswordInput } from "./components/ui/password-input";


const SignUp = () => {
  const[firstName,setFirstName] = useState('');
  const[lastName,setLastName] = useState('');
  const[email,setEmail] = useState('');
  const[pass,setPass] = useState('');
  const[submitted,setSubmitted] = useState(false);

  const handleSubmit = (e) => {
     e.preventDefault();
     setSubmitted(true);

     if (!firstName || !lastName || !email) {
     console.log("Field not given");
     toaster.error({
      title:"Missing Fields",
      description:"Please fill in all required fields.",
      closable: true,
    }); return; // stop only when invalid
   }

    if (!passwordRegex.test(pass)) {
    console.log("Invalid Password");
     toaster.error({
      title:"Invalid Password",
      description:"Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
      closable: true,
    }); return;
  }
     toaster.success({
      title:"Success",
      description:"Form submitted successfully!",
      closable: true,
     });

  // runs ONLY when form is valid
     console.log({
     firstName,
     lastName,
     email,
     pass,
    });
   };

   const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailEmpty = email.trim() === "";
  const isEmailInvalid = !emailRegex.test(email);


  return (
    <Center minH="100vh" bg="gray.50">
      <Splitter.Root
        panels={[{ id: "a" }, { id: "b" }]}
        maxW="800px"
        maxH="550px"
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
                <Field.Root required invalid={submitted && firstName.trim() === ""}>
                  <Field.Label>First Name
                    <FieldRequiredIndicator/>
                  </Field.Label>
                  <Input 
                     required
                     placeholder="Enter you first name"
                     value={firstName} 
                     onChange={(e)=>setFirstName(e.target.value)}/>
                     <Field.ErrorText>First Name is Required</Field.ErrorText>
                </Field.Root>

                <Field.Root required invalid={submitted && lastName.trim()===""}>
                  <Field.Label>Last Name
                    <FieldRequiredIndicator/>
                  </Field.Label>
                  <Input 
                     required
                     placeholder="Enter your last name"
                     value={lastName} 
                     onChange={(e)=>setLastName(e.target.value)}/>
                     <Field.ErrorText>Last Name is Required</Field.ErrorText>
                </Field.Root>

                <Field.Root required invalid={submitted &&
                                             (email.trim()==="" || !emailRegex.test(email))}>
                  <Field.Label>Email
                    <FieldRequiredIndicator/>
                  </Field.Label>
                  <Input 
                     required
                     type="email" 
                     value={email} 
                     onChange={(e)=>setEmail(e.target.value)}/>
                     {submitted && isEmailEmpty && 
                         <Field.ErrorText>Email is Required</Field.ErrorText>}
                     {submitted && isEmailInvalid && !isEmailEmpty && 
                         <Field.ErrorText>Invalid Email</Field.ErrorText>}
                </Field.Root>

                <Field.Root required invalid={submitted && !passwordRegex.test(pass)}>
                  <Field.Label>Password</Field.Label>
                  <PasswordInput
                    required
                    type="password"
                     value={pass} 
                     onChange={(e)=>setPass(e.target.value)}/>
                     <Field.ErrorText>Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.</Field.ErrorText>
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
