import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from "@mantine/core";
import {LoopStart} from "./LoopStart";
import './index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MantineProvider>
            <LoopStart/>
        </MantineProvider>
    </React.StrictMode>
);
