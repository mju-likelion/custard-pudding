import { Route, Routes } from 'react-router-dom';
import PageLayout from './PageLayout';
import Main from '../pages/Main';
import Apply from '../pages/Apply';
import Check from '../pages/Check';

const RoutesContainer = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </PageLayout>
  );
};

export default RoutesContainer;
