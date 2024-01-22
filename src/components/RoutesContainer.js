import { Route, Routes } from 'react-router-dom';
import PageLayout from './PageLayout';
import Main from '../pages/Main';

const RoutesContainer = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </PageLayout>
  );
};

export default RoutesContainer;
