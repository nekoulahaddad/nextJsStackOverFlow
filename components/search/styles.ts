import styled from 'styled-components';

export const SearchContainer = styled.div`
display:flex;
justify-content:center;
margin:40px 0;
`

export const SearchInput = styled.input`
width: 400px;
padding: 10px 15px;
font-size: 20px;
border: 2px solid #A6ABBD;
border-radius: 5px;
&:focus{
    outline: none;
}
`

export const SearchButton = styled.span`
width: 100px;
height: 50px;
margin-left:10px;
background: linear-gradient(135.37deg, rgba(0, 0, 0, 0.35) 4.29%, rgba(255, 255, 255, 0.35) 95.6%), #EBECF0;
background-blend-mode: soft-light, normal;
box-shadow: -5px -5px 10px #FAFBFF, 5px 5px 10px #A6ABBD;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
cursor:pointer;
`
