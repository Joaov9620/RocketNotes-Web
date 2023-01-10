import styled from 'styled-components';

export const Container = styled.section`
    margin: 30px 0;
    
    >h2{
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

        padding-bottom: 16px;
        margin-bottom: 40px;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }
`;