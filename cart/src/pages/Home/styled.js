import styled from 'styled-components'

export const Container = styled.section`
    height: 90vh;
    width: 100%;
    ul{
        display: flex;
        justify-content: start;
    }
    li{
        background-color: #64646417;
        margin: 20px 10px;
        padding: 20px;
        width: 150px;
        display: flex;
        flex-direction: column;
        p{
            width: 100%;
            font-size: 1.2em;
            text-align: center;
        }
        span{
            margin-bottom: 10px;
             width: 100%;
             font-size: .9em;
             color: #646464;
             text-align: center;
             word-wrap: break-word;
        }
    }
`;