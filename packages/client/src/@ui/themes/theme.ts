import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    borderRadius: '10px',
    palette: {
        primary: '#AD1FEA',
        secondary: '#4661E6',
        tertiary: '#373F68',
        surface: '#FFFFFF',
        background: '#F7F8FD',
        onBase: '#F2F4FF',
        title: '#3A4374',
        body: '#647196',
        alert: '#D73737',
        tangerine: '#F49F85',
        maya: '#62BCFA',
    },
    text: {
        headline1: {
            size: '24px',
            height: '35px',
            weight: 700,
            spacing: '-0.33px',
        },
        headline2: {
            size: '20px',
            height: '29px',
            weight: 700,
            spacing: '-0.25px',
        },
        headline3: {
            size: '18px',
            height: '26px',
            weight: 700,
            spacing: '-0.25px',
        },
        headline4: {
            size: '14px',
            height: '20px',
            weight: 700,
            spacing: '-0.2px',
        },
        body1: {
            size: '16px',
            height: '23px',
            weight: 400,
            spacing: '0px',
        },
        body2: {
            size: '14px',
            height: '22px',
            weight: 400,
            spacing: '0px',
        },
        body3: {
            size: '12px',
            height: '19px',
            weight: 600,
            spacing: '0px',
        },
    },
    grid: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '64px',
    },
}
