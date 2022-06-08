import { lazy } from "solid-js";
import { Route, Routes } from "solid-app-router";
import Layout from "./components/Layout";
import About from './pages/About';
// const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Writing = lazy(() => import('./pages/Writing'));
const Contact = lazy(() => import('./pages/Contact'));
const Error = lazy(() => import('./pages/Error'));
import './app.scss';

const App = () => {
  console.log(
    '\n',
    ' __    __   _______  __       __        ______    __ \n',
    '|  |  |  | |   ____||  |     |  |      /  __  \\  |  | \n',
    '|  |__|  | |  |__   |  |     |  |     |  |  |  | |  | \n',
    '|   __   | |   __|  |  |     |  |     |  |  |  | |  | \n',
    "|  |  |  | |  |____ |  `----.|  `----.|  `--'  | |__| \n",
    '|__|  |__| |_______||_______||_______| \\______/  (__) \n \n',
    'Thanks for checking out my website. You can view the \n',
    'source code here: http://www.github.com/canfie1d/ryancanfield.me-2022 \n',
    'or contact me here ryancanfield@me.com \n \n'
  );

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/work/:id' element={<CaseStudy />} />
        <Route path='/writing' element={<Writing />} />
        <Route path='/contact' element={<Contact />} />
        <Route element={<Error />} />
      </Routes>
    </Layout>
  );
};

export default App;
