import styled from 'styled-components'
import { mobile } from '../responsive'

const Container =styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
padding:20px;
width: 25%;
background-color: white;
${mobile({width:"75%"})}
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const From = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex:1;
min-width: 40%;
margin:10px 0px;
padding: 10px;
`

const Button = styled.button`
width: 40%;
border:none;
padding:15px 20px;
background: teal;
color:white;
cursor: pointer;
margin-bottom: 10px;
`

const Link=styled.a`

margin:10px 0px;
font-size:12px;
text-decoration: underline;
cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <From>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>   
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> 
                <Link>CREATE A NEW ACCOUNT</Link> 
            </From>
        </Wrapper>
    </Container>
  )
}

export default Login