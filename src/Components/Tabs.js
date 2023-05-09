import * as React from 'react';
import Box from '@mui/material/Box';
import Table1 from './Table';
import Dailog from './Dailog';




export default function CenteredTabs() {

  return (
    <>
      <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {/* dailog section starts */}
      <Dailog/>
       {/* dailog section ends */}

       {/* table section starts */}
      <Table1/> 
      {/* table section ends */}
    </Box>
  
    </>
  );
}















// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: 'green',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'green',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'red',
//     },
//     '&:hover fieldset': {
//       borderColor: 'yellow',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'green',
//     },
//   },
// });

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     width: 'auto',
//     padding: '10px 12px',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// const RedditTextField = styled((props) => (
//   <TextField InputProps={{ disableUnderline: true }} {...props} />
// ))(({ theme }) => ({
//   '& .MuiFilledInput-root': {
//     border: '1px solid #e2e2e1',
//     overflow: 'hidden',
//     borderRadius: 4,
//     backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//     '&.Mui-focused': {
//       backgroundColor: 'transparent',
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// const ValidationTextField = styled(TextField)({
//   '& input:valid + fieldset': {
//     borderColor: 'green',
//     borderWidth: 2,
//   },
//   '& input:invalid + fieldset': {
//     borderColor: 'red',
//     borderWidth: 2,
//   },
//   '& input:valid:focus + fieldset': {
//     borderLeftWidth: 6,
//     padding: '4px !important', // override inline-style
//   },
// });
