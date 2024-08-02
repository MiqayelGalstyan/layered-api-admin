import { FC, ReactNode, Fragment } from 'react';
import { Modal } from '@mui/material';

interface ICustomModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const CustomModal: FC<ICustomModalProps> = ({ open, onClose, children }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Fragment>
                {children}
            </Fragment>
        </Modal>
    )
}

export default CustomModal;