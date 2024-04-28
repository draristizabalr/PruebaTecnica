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
      <div className="bg-slate-100 p-12 border rounded-md relative">
        <span className="absolute top-2 right-4 cursor-pointer text-xl" onClick={() => getClose(false)}>&times;</span>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;