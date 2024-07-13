import {useState} from 'react';

import ModalWrapper from '@/lib/components/global/ModalWrapper';

export default function MnemonicsConnect() {
    const [open, setIsOpen] = useState(false);
    return (
        <div>
            <p>Mnemonic Connect</p>
            <button onClick={() => setIsOpen(true)}>open modal</button>
            <ModalWrapper state={open} onClose={() => setIsOpen(false)}>
                <p>mnemonic connect</p>
            </ModalWrapper>
        </div>
    );
}
