import React from 'react';
import Container from '../../components/themeLayout/ContainerLayout';
import Column from '../../components/themeLayout/ColumnLayout';
import LoginForm from '../../components/login/LoginForm';
import LoginImage from '../../components/login/LoginImage';
const Login = () => {


  return (
    <Container className="">
      <Column className="col-lg-7 pd-top-50 pd-bottom-50 go-top">
      <LoginImage/>
      </Column>
      <Column className="col-lg-5 pd-top-50 go-top mt-2">
      <LoginForm/>
      </Column>
    </Container>

  )


}


export default Login;