import React, { useContext } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import mapContext from '../../store/map-context';
const TodoList = () => {
    const mapCtx = useContext(mapContext)
    console.log(mapCtx.bakeryList)
    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {mapCtx.bakeryList.map((bakery)=>{
                return(
                    <ListItem
                        key={bakery.name}
                        secondaryAction={bakery.isChecked ? 'o' : 'x'}
                        disablePadding >
                        <ListItemButton>
                            <ListItemText id={bakery.name} primary={bakery.name} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
            
        </List>
    );
};

export default TodoList;