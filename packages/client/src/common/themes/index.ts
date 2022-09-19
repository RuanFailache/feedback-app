import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    borderRadius: '10px',
    palette: {
        primary: '#AD1FEA',
        secondary: '#4661E6',
        tertiary: '#373F68',
        background: '#F2F4FF',
        surface: '#F7F8FD',
        title: '#3A4374',
        body: '#647196',
        onBase: '#FFFFFF',
        alert: '#D73737',
        tangerine: '#F49F85',
        maya: '#62BCFA',
    },
    text: {
        headline1: {
            size: 24,
            height: 35,
            weight: 700,
            spacing: -0.33,
        },
        headline2: {
            size: 20,
            height: 29,
            weight: 700,
            spacing: -0.25,
        },
        headline3: {
            size: 18,
            height: 26,
            weight: 700,
            spacing: -0.25,
        },
        headline4: {
            size: 14,
            height: 20,
            weight: 700,
            spacing: -0.2,
        },
        body1: {
            size: 16,
            height: 23,
            weight: 400,
            spacing: 0,
        },
        body2: {
            size: 15,
            height: 22,
            weight: 400,
            spacing: 0,
        },
        body3: {
            size: 13,
            height: 19,
            weight: 600,
            spacing: 0,
        },
    },
}
