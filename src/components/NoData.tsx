import styled from 'styled-components';

export const NoData = () => {
    return <Container>No Data</Container>;
};

const Container = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 0;
    font-style: italic;
    font-size: ${(props) => props.theme.fontSize.sm};
`;
