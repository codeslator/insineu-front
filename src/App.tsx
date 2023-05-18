import { Button, ConfigProvider } from 'antd';
import { defaultTheme } from './views/assets/themes/defaultTheme';

function App() {

  return (
    <ConfigProvider theme={defaultTheme}>
      <Button>Hello wordl</Button>
    </ConfigProvider>
  )
}

export default App
