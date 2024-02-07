import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ children }) => {
  const notify = () => {
    toast('💖\u00A0\u00A0메일 주소가 복사 되었습니다!');
  };

  return (
    <div>
      <button onClick={notify}>{children}</button>
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
    </div>
  );
};

const StyledToastContainer = styled(ToastContainer)`
  width: 100%;
  display: flex;
  justify-content: center;
  &&&.Toastify__toast-container {
    margin-bottom: 70px;
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
