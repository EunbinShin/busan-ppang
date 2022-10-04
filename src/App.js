import Grid from '@mui/material/Grid';

import Busan from './components/busan/Busan';
import TodoList from './components/todos/TodoList';

function App() {
//https://mui.com/material-ui/react-list/
  return (
      <Grid container spacing={1}
      sx={{
        height: '100vh'
      }}>
        <Grid item lg={7}
          style={{backgroundColor:'grey'}}>
          <Busan/>
        </Grid>
        <Grid item lg={5} 
          style={{backgroundColor:'pink'}}>
          <TodoList/>
        </Grid>
      </Grid>
  );
}

export default App;
