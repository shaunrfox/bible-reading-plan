import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const StyledCard = styled.div`
    border: 1px solid gray;
    border-radius: 8px;
    padding: 1rem;
`;

export default function Card({ children }: PropsWithChildren) {
    return <StyledCard>{children}</StyledCard>;
}
