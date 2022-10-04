import React from 'react';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const TodoList = () => {
    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                <ListItem
                    key={value}
                    secondaryAction={'3/12'}
                    disablePadding
                >
                    <ListItemButton>
                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                    </ListItemButton>
                </ListItem>
                );
            })}
        </List>
    );
};

export default TodoList;