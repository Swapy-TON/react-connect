import type {FC} from 'react';

import { SwapyConnect } from '@/lib';
import {MnemonicsConnect} from '@/lib';

import './index.css';

const App: FC = () => {
    return (
        <div>
            <SwapyConnect />
            <MnemonicsConnect />
        </div>
    );
};

export default App;
