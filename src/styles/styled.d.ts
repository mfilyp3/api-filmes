import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            bgColor: string;
            primary: string;
            secondary: string;
            tertiary: string;

            fontColor: string;
        }
    }
}