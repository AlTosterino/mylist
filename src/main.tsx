import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// @ts-expect-error Imported but not used
import {SpeedInsights} from "@vercel/speed-insights/next"
import {CssBaseline, ThemeProvider, createTheme} from '@mui/material'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFound.tsx";
import MyListAppBar from './components/MyListAppBar.tsx'

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        body {
          background-color: #f7f3f2;
        }
      `,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <><CssBaseline/><MyListAppBar/><App/></>,
        errorElement: <><CssBaseline/><MyListAppBar/><NotFoundPage/></>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
)
