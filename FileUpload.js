import React from 'react';
import { TextField, FormControl, InputLabel, MenuItem, Select, Box, Button } from '@mui/material'; 
import AddIcon from '@mui/icons-material/Add';
import '../css/defaultStyle.css';

const FileUpload = () => {
    const width = { width: 197}

  return (
    <div>
          <Box className='flexGlow'>

              <TextField label='Document Name' placeholder='Document Name' style={width}/>

          <FormControl sx={{ m: 1, minWidth: 80, padding: '10.5 12' }} style={width} >
              <InputLabel id="demo-simple-select-helper-label">Type Of File</InputLabel>
                  <Select 
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"

                  label="designation"

              >

                  <MenuItem value="pdf">Pdf</MenuItem>
                  <MenuItem value="Jpg">Jpeg</MenuItem>
                  <MenuItem value="Png">Ping</MenuItem>
              </Select>
          </FormControl>

              <Button
                  variant="contained"
                  component="label"
              >
                <AddIcon />
                  Upload File
                  <input
                      type="file"
                      hidden
                     
                  />
                     
             </Button>






             <Button variant='contained'>Submit</Button>
</Box>
    </div>
  )
}

export default FileUpload