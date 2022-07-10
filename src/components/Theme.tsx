import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

const theme = {
    colors: {
        eden: '#125B50',
        yellow: '#F8B400',
        cream: '#FAF5E4',
        brown: '#3A2308',
        red: '#FF6363',
    },
    fontSize: {
        sm: '1.2rem',
        base: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        xl2: '3rem',
    },
};

interface Props {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
