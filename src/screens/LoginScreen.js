import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function LoginScreen() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch()
const userLogin = useSelector((state)=> state.userLogin)


const {loading, error, userInfo } = userLogin


const submitHandler = (input) => {
input.preventDefault()
dispatch(login(email, password))
}
  return (
    <FormContainer>
        <h1>Sign in</h1>
        {error && <MessageBox variant='danger'>{error}</MessageBox>}
        {loading && <LoadingBox />}
        <Form onSubmit={submitHandler}>



            
        </Form>
    </FormContainer>
  )
}
