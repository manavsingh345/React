import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export default function SearchBox() {
    return (
        <div>
            <h1>Search for the weather</h1>
            <TextField id="city" label="City Name" variant="outlined" required/>
            <br />
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    );

}