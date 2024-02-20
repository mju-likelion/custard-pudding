import { Route, Routes } from 'react-router-dom';
import PageLayout from './PageLayout';
import Main from '../pages/Main';
import Apply from '../pages/Apply';
import Check from '../pages/Check';
import ApplyWrite from '../pages/ApplyWrite';
import Complete from '../pages/Complete';
import NotFound from '../pages/NotFound';

const RoutesContainer = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/check" element={<Check />} />
        <Route path="/write" element={<ApplyWrite />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RoutesContainer;
