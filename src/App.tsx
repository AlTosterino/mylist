import {
    Card,
    CardActionArea,
    Container,
    Stack,
    Typography
} from '@mui/material'

function App() {
    return (
        <>
            <Container maxWidth="sm">
                <Typography align="center" variant="h4" sx={{"p": "30px"}}>Lists</Typography>
                <Stack spacing={2}>
                    <Card>
                        <CardActionArea>
                            <Typography align="center" variant="body1">Książki</Typography>
                        </CardActionArea>
                    </Card>
                    <Card>
                        <CardActionArea>
                            <Typography align="center" variant="body1">Filmy</Typography>
                        </CardActionArea>
                    </Card>
                </Stack>
            </Container>
        </>
    )
}

export default App
