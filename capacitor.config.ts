import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'app.tucsonrepaircafe.org',
    appName: 'TRC App',
    webDir: 'dist/trc-ng/browser',
    plugins: {
        CapacitorHttp: {
            enabled: true,
        },
    },
};

export default config;
