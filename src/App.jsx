import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {

  return (
      <MantineProvider>
        <div className={"text-center"}>
          Hello
        </div>
      </MantineProvider>
  )
}

export default App
