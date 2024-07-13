import {useEffect, type ReactNode, useState} from 'react';

import styles from './ModalWrapper.module.css';

type TModalWrapperProps = {
    state: boolean;
    children: ReactNode;
    containerStyles?: string;
    onClose: () => void;
};

export default function ModalWrapper({state, children, onClose, containerStyles = ''}: TModalWrapperProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (state) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [state]);

    return (
        isVisible && (
            <div
                className={`${styles['modal-overlay']} ${state ? styles['fade-in'] : styles['fade-out']}`}
                onAnimationEnd={() => setIsVisible(state)}
                onClick={() => onClose()}>
                <div
                    className={`${containerStyles ? containerStyles : `${styles['modal-content']} ${styles['hide-scrollbar']}`}`}
                    onClick={e => e.stopPropagation()}>
                    <button onClick={() => onClose()} className={styles['close-button']}>
                        <img src={'/images/global/cross-icon.svg'} width={25} height={25} alt="close icon" />
                    </button>
                    {children}
                </div>
            </div>
        )
    );
}
