import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material"
import { mobile } from "../responsive"
import { useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethods"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"
const Container =styled.div``
const Wrapper =styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection:"column",padding:"10px"})}
`
const ImgContainer =styled.div`
flex:1;`
const Image =styled.img`
width: 100%;
height: 90vh;
object-fit: contain;
${mobile({height:"40vh"})}
`
const InfoContainer =styled.div`
flex:1;
padding: 0 50px;
${mobile({padding:"10px"})}
`
const Title =styled.h1`
font-weight: 200;

`
const Desc =styled.p`
margin:20px 0;
`
const Price =styled.span`
font-weight: 100;

font-size: 40px;`

const FilterContainer =styled.div`
width: 50%;
margin: 30px 0;
display: flex;
justify-content: space-between;
${mobile({width:"100%"})}
`

const Filter =styled.div`
display: flex;
align-items: center;
`

const FilterTitle =styled.span`
font-size: 20px;
font-weight: 200;

`

const FilterColor =styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props=>props.color};
  border: none;
margin: 0 5px;
cursor: pointer;
`

const FilterSize =styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption =styled.option``


const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%"})}
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border:1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`

const Button = styled.button`
padding: 15px;
border:2px solid teal;
background-color: #fff;
cursor: pointer;
font-weight: 500;
transition: all 0.5s ease;
&:hover{
    background-color: teal;
    color:white;
}
`
const Product = () => {
  const {id}=useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch=useDispatch();
  console.log(id);
  useEffect(() => {
   const getProduct=async()=>{
     try {
       const res =await publicRequest.get(`/products/find/${id}`)
         setSize(res.data.size[0])
         setColor(res.data.color[0])
       setProduct(res.data)
       
     } catch (error) {
       console.error(error);
     }
     
    }
    getProduct();
  }, [id]);

  const handleClick=()=>{
      console.log(color,size)
      if (!color&&!size){
          alert('you did not choose color or size please select one or both to continue ')
      }
    dispatch(addProduct({...product,quantity,color,size}))
  }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        
            <ImgContainer>
            <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {
                product.color && product.color.map(c=>(<FilterColor color={c}
                   key={c} onClick={()=>setColor(c)} />))
              }
              {/* {product.color} */}
              {/* <FilterColor color="black" />
              <FilterColor color="darkblue" />
            <FilterColor color="gray" /> */}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
              {
                product.size && product.size.map(s=>(<FilterSizeOption key={s} value={s} >{s}</FilterSizeOption>))
                
              }
                {/* <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>*/}
              </FilterSize> 
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>setQuantity(quantity <=0 ? 0:quantity-1)} />
              <Amount>{quantity}</Amount>
              <Add onClick={()=>setQuantity(quantity+1)} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product