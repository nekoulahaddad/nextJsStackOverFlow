import styled, {keyframes} from 'styled-components';


const animate = keyframes`
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(5px);
  }
`

export const LoaderContainer = styled.div`
display: flex;
column-gap: 10px;
align-items: center;
justify-content: center;
height: calc(100vh - 300px);
`

export const LoaderElement = styled.span`
height: 20px;
width: 20px;
border-radius: 50%;
background: #008ae6;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
animation: ${animate} 1s ease-in-out infinite alternate;
&:nth-child(1) {
    animation-delay: -0.25s;
}
&:nth-child(2) {
    background: #e60000;
    animation-delay: -0.5s;
}
&:nth-child(3) {
    background: #ffcc00;
    animation-delay: -0.75s;
}
&:nth-child(4) {
    background: #008800;
    animation-delay: -1s;
}
`