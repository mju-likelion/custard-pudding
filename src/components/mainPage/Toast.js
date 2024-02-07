import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

const Toast = () => {
  return (
    <StyledToastContainer
      limit={1}
      position="bottom-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

const StyledToastContainer = styled(ToastContainer)`
  width: 100%;
  display: flex;
  justify-content: center;
  &&&.Toastify__toast-container {
    margin-bottom: 100px;
    @media ${({ theme }) => theme.devices.TABLET} {
      margin-bottom: 70px;
    }
    .Toastify__toast {
      width: 330px;
      height: 70px;
      background-color: rgb(255, 255, 255);
    }
    .Toastify__toast-body {
      color: #181818;
    }
    .Toastify__progress-bar {
      background: linear-gradient(to right, #f48096, #ff6d8a, #ff2d53);
    }
  }
`;

export default Toast;
