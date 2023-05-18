import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { defaultTheme } from './views/assets/themes/defaultTheme';
import { router } from './configs/router';

function App() {
  return (
    <ConfigProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
