import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  breakpoints: {
    sm: '318px',
    '2sm': '430px',
    md: '600px',
    '2md': '680px',
    lg: '1111px',
    xl: '1315px',
    '2xl': '1536px',
  },
})

export default theme