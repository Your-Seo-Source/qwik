## API Report File for "@builder.io/qwik-city"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ClientConn } from '@builder.io/qwik-city/middleware/request-handler';
import type { ServerRenderOptions } from '@builder.io/qwik-city/middleware/request-handler';

// @public (undocumented)
export interface Addr {
    // (undocumented)
    hostname: string;
    // (undocumented)
    port: number;
    // (undocumented)
    transport: 'tcp' | 'udp';
}

// @public (undocumented)
export interface ConnInfo {
    // (undocumented)
    readonly localAddr: Addr;
    // (undocumented)
    readonly remoteAddr: Addr;
}

// @public (undocumented)
export function createQwikCity(opts: QwikCityDenoOptions): {
    router: (request: Request, conn: ConnInfo) => Promise<Response | null>;
    notFound: (request: Request) => Promise<Response>;
    staticFile: (request: Request) => Promise<Response | null>;
};

// @public (undocumented)
export interface QwikCityDenoOptions extends ServerRenderOptions {
    // (undocumented)
    getClientConn?: (request: Request, conn: ConnInfo) => ClientConn;
    static?: {
        root?: string;
        cacheControl?: string;
    };
}

// (No @packageDocumentation comment for this package)

```
