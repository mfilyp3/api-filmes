import styled from 'styled-components'

export const Container = styled.div`
    p {
        margin-bottom: 10px;
    }
`;

export const Badge = styled.button`
    min-width: 20px;
    height:20px;
    padding: 5px;
    text-align: center;
    background-color: transparent;
    color: ${props => props.theme.colors.fontColor};
    border-radius: 3px;
    border: 0 none;
    cursor: pointer;


`