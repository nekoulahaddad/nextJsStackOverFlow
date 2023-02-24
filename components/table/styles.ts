import styled from 'styled-components';


export const RowElement = styled.tr`
height: 40px;
cursor: pointer;
&:hover{
    background: linear-gradient(135.37deg, rgba(0, 0, 0, 0.35) 4.29%, rgba(255, 255, 255, 0.35) 95.6%), #EBECF0;
    background-blend-mode: soft-light, normal;
}
`

export const TagElement = styled.span`
border: 1px solid #ccc;
background: linear-gradient(135.37deg, rgba(0, 0, 0, 0.35) 4.29%, rgba(255, 255, 255, 0.35) 95.6%), #EBECF0;
background-blend-mode: soft-light, normal;
padding: 2px 10px;
margin: 0 5px;
border-radius: 5px;
`
