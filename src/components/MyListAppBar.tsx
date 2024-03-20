import { AppBar, Toolbar, Stack, Typography } from "@mui/material";
import ChecklistIcon from '@mui/icons-material/Checklist';

export default function MyListAppBar() {
    return <>
    <AppBar position='relative'>
        <Toolbar>
            <Stack direction="row" alignItems="center" gap={1}>
                <ChecklistIcon />
                <Typography variant="h6">My List</Typography>
            </Stack>
        </Toolbar>
    </AppBar>
    </>
}