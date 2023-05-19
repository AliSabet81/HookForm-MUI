import { Box, Button, Container, IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import { Styles } from "./style";
import useMuiForm from "./useMuiForm";
// const useStyles = makeStyles({
//     root:{
//         background:'white'
//     }
// })





const MuiForm = () => {
    const {
        handleFormUser,
        register,
        handleSubmit,
        errors,
        passwordType,
        setPasswordType
    } = useMuiForm()

    return ( 
        <Container>
            <Box component="form" sx={Styles} onSubmit={handleSubmit(handleFormUser)} >
                <TextField label="UserName" error={Boolean(errors.username?.message)} helperText={errors.username?.message} InputProps={{ 
                    startAdornment:( 
                        <InputAdornment position="start">
                                <PersonIcon/>
                        </InputAdornment>),
                    ...register('username') }} ></TextField>
                <TextField error={Boolean(errors.password?.message)} helperText={errors.password?.message}  type={passwordType} label="Password" InputProps={{
                    endAdornment:( 
                        <InputAdornment position="start">
                            <IconButton onClick={()=>{
                                setPasswordType((prev)=>{
                                    if (prev === 'password') return 'text'
                                    return 'password'
                                })
                                }}>
                                {passwordType === "text" ?<VisibilityIcon/> : <VisibilityOffIcon/>}
                            </IconButton>
                        </InputAdornment>),
                        ...register('password')
                }}/>
                <br />
                <Button type='submit' variant="contained" size="large">Register</Button>
            </Box>
        </Container>
     );
}
 
export default MuiForm;