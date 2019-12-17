import styled from 'styled-components'

export const ContentStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "criterios avaliacoes";
    margin: 0 10vh 0 10vh;
    padding: 5vh 0;
    justify-content: center;
    grid-gap: 5px;
`

export const LeftColumnStyle = styled.div`
    grid-area: criterios;
`

export const RightColumnStyle = styled.div`
    grid-area: avaliacoes;
    background: #99f;
`