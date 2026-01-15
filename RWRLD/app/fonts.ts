import localFont from 'next/font/local';

export const myFont = localFont({
    src: [
        {
            path: '../public/fonts/Satoshi-BlackItalic.woff2',
            weight: '400',
            style: 'normal'
        },
    ],
    variable: '--font-myfont',
    display: 'swap',
})