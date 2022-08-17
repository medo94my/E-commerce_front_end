import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined,} from '@mui/icons-material';
import {mobile} from "../responsive"
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';

const Container=styled.div`
height:60px;
width:100%;
${mobile({height:"50px"})}

`
const Wrapper= styled.div`
padding:10px 20px;
display :flex;
justify-content:space-between;
align-items: center;
${mobile({padding:"10px 0px"})}
`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language=styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`
const SearchContainer=styled.div`
border:0.5px solid gray;
display:flex;
align-items: center;
margin-left:25px;
`
const Input=styled.input`
border:none;
${mobile({width:"50px"})}
`
const Center=styled.div`
flex:1;
text-align:center;
`
const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({justifyContent:"center",flex:2})}
`

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px",marginLeft:"10px"})}
`
const NavLink = styled(Link)`
  text-decoration: none;
  color: #404040;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;
const Navbar = () => {
  const quantity=useSelector(state=>state.cart.quantity);
    const user=useSelector(state => state.user.currentUser)

    return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Sreach'/>
                    <SearchIcon style={{color:'gray',fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>HishaM.</Logo></Center>
            <Right>
                {user ? (<><MenuItem><NavLink to={"/register"}>Logout</NavLink></MenuItem>
                    <Link to="/cart">
                        <MenuItem>

                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined color="action" />
                            </Badge>
                        </MenuItem>
                    </Link>
                </>)
                :
                    (<><MenuItem><NavLink to={"/register"}>Register</NavLink></MenuItem>
                    <MenuItem><NavLink to={"/login"}>Login</NavLink></MenuItem></>)
                }

    </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar