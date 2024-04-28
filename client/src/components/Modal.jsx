import { PropTypes } from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ isOpen, getClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        getClose(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-slate-950/50">
      <div className="bg-slate-100 p-6 border rounded-md relative">
        <span className="flex justify-center items-center w-6 h-6 absolute right-6 top-4 cursor-pointer text-xs border rounded-md border-gray-600 bg-gray-300 " onClick={() => getClose(false)}>✖️</span>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  getClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;