import styled from 'styled-components'

export const ContentStyle = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        padding: 100px 0px;
    }
`

export const ButtonStyle = styled.button`
    font-size: large;
    background-color: white;
    border-radius: 10px;
    width: 120px;
    line-height: 50px;
    display: inline-block;
    cursor: pointer;
    text-decoration:none;

    &:hover {
        background-color: gray;
        color: white;
    }
`