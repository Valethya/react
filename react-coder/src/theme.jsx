import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: "#69f0ae",
      },
      secondary: {
        main: "#b388ff",
        },
      accent: {
          main:"#fe019a",
      }
    },
    typography: {
        fontFamily: "Ubuntu Mono"
    },
});
  
export default theme 