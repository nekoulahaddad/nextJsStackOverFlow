import styled from 'styled-components';


export const SortElement = styled.div`
display:flex;
justify-content:center;
height: 40px;
width: 200px;
line-height: 40px;
cursor: pointer;
&:hover{
    background: linear-gradient(135.37deg, rgba(0, 0, 0, 0.35) 4.29%, rgba(255, 255, 255, 0.35) 95.6%), #EBECF0;
    background-blend-mode: soft-light, normal;
}
`

export const SortOrderContainer = styled.div`
display:flex;
flex-direction: row;
margin-bottom: 20px;
`