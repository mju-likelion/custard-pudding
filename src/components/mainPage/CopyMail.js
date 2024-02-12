import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CopyMail = ({ children }) => {
  const MAIL_ADDRESS = 'mju@likelion.org';
  const handleCopy = () => {
    toast('💖\u00A0\u00A0메일 주소가 복사 되었습니다!');
  };

  return (
    <CopyToClipboard text={MAIL_ADDRESS} onCopy={handleCopy}>
      <button>{children}</button>
    </CopyToClipboard>
  );
};

export default CopyMail;
