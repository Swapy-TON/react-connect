import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react';

type TUserInfo = {
    hash?: string;
    country?: string;
    city?: string;
    browser?: string;
    os?: string;
    ip?: string;
};

export default function AuthProvider({children}: {children: ReactNode}) {
    const [userInfo, setUserInfo] = useState<TUserInfo>({});

    const {getData} = useVisitorData({extendedResult: true}, {immediate: true});

    useEffect(() => {
        getData().then(data => {
            setUserInfo({
                hash: data.visitorId,
                browser: data.browserName + ' ' + data.browserVersion,
                city: 'deprecated',
                country: 'deprecated',
                ip: data.ip,
                os: data.os + ' ' + data.osVersion,
            });
        });
    }, []);

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    return <>{children}</>;
}
