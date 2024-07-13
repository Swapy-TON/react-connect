import type {ReactNode} from 'react';

import UserDataProvider from './UserDataProvider';
import AuthProvider from './AuthProvider';

export default function Provider({children}: {children: ReactNode}) {
    return (
        <UserDataProvider>
            <AuthProvider>{children}</AuthProvider>
        </UserDataProvider>
    );
}
