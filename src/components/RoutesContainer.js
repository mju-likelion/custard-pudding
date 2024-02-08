import { Route, Routes } from 'react-router-dom';
import PageLayout from './PageLayout';
import Main from '../pages/Main';
import Apply from '../pages/Apply';
import Check from '../pages/Check';
import ApplyWrite from '../pages/ApplyWrite';

const RoutesContainer = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/check" element={<Check />} />
        <Route path="/write" element={<ApplyWrite />} />
      </Routes>
    </PageLayout>
  );
};

export default RoutesContainer;
