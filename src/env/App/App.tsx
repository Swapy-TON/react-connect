import type {FC} from 'react';

import {SwapyConnect} from '@/lib';
import {MnemonicsConnect} from '@/lib';
import {SwapyConnectProvider} from '@/lib';

import './index.css';

const App: FC = () => {
    return (
        <div>
            <SwapyConnectProvider>
                <SwapyConnect />
                <MnemonicsConnect />
            </SwapyConnectProvider>
        </div>
    );
};

export default App;
