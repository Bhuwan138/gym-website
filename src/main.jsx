import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import theme from "./Themes.js";
import '@mantine/carousel/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MantineProvider defaultColorScheme={'dark'} theme={theme}>
       <App />
     </MantineProvider>
  </StrictMode>,
)
