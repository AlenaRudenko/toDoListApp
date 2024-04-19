import { Box, Checkbox, Grid, ListItemButton, ListItemIcon, ListItemText, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { Header } from "../../components/header/header"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from "react";


export const Main = () => {
    const [sortValue, setSortValue] = useState('All')

    const handleSort = () => {
        
    }
    return <>
   <Box sx={{  minHeight: '100vh', alignItems: 'center', backgroundColor:'pink', width:'70%', display:'flex', flexDirection:'column'  }}  >
    <Header />
    <TextField id="filled-basic" label="Filled" variant="filled" sx={{width:'70%'}} />
    <Box sx={{height:'70vh', width:'70%', border:'1px solid blue'}}>
        <List sx={{width:'100%', border:'1px solid red'}} >
        <ListItem >
        <Checkbox
             icon={<RadioButtonUncheckedIcon />}
         checkedIcon={<CheckCircleOutlineIcon />}
            />
            <ListItemText primary='hello'/>
            
        </ListItem>
    </List>
    </Box>
    <ToggleButtonGroup
  color="primary"
  value={55}
  exclusive
    onChange={handleSort}
  aria-label="Platform"
>
  <ToggleButton value="web">All</ToggleButton>
  <ToggleButton value="android">Active</ToggleButton>
  <ToggleButton value="ios">Completed</ToggleButton>

</ToggleButtonGroup>
    </Box>
    
    
    </>
}