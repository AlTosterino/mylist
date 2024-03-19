import {
    AppBar,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Paper,
    SpeedDial,
    SpeedDialIcon,
    Stack,
    Toolbar,
    Typography
} from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ChecklistIcon from '@mui/icons-material/Checklist';
const AddNewCard = () => (
  <Card>
    <CardActionArea>
      <ControlPointIcon sx={{"fontSize": 100}}/>
    </CardActionArea>
  </Card>
);

const ListCard = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="div">
        Test
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Number of items: 20
      </Typography>
    </CardContent>
  </Card>
)

function App() {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Stack direction="row" alignItems="center" gap={1}>
            <ChecklistIcon />
            <Typography variant="h6">My List</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default App
