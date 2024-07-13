import type {ReactNode} from 'react';
import {FpjsProvider} from '@fingerprintjs/fingerprintjs-pro-react';

export default function UserDataProvider({children}: {children: ReactNode}) {
    return (
        <FpjsProvider
            loadOptions={{
                apiKey: 'n3gmPt0up6R5dCSviNiI',
                region: 'eu',
                endpoint: 'https://fp.swapy.tg',
                scriptUrlPattern: ['https://fp.swapy.tg/web/v<version>/<apiKey>/loader_v<loaderVersion>.js'],
            }}>
            {children}
        </FpjsProvider>
    );
}
