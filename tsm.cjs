const { join } = require('node:path');
const { pathToFileURL } = require('node:url');

const corePath = pathToFileURL(join(__dirname, 'packages', 'qwik', 'src', 'core', 'index.ts'));

const bannerTS = `
globalThis.qTest = true;
globalThis.qRuntimeQrl = true;
globalThis.qDev = true;
`;

const bannerTSX = `
globalThis.qTest = true;
globalThis.qRuntimeQrl = true;
globalThis.qDev = true;
globalThis.qInspector = false;
import * as qwikJsx from "${corePath}";`;

if (
  typeof global !== 'undefined' &&
  typeof globalThis.fetch !== 'function' &&
  typeof process !== 'undefined' &&
  process.versions.node
) {
  if (!globalThis.fetch) {
    const { fetch, Headers, Request, Response, FormData } = require('undici');
    globalThis.fetch = fetch;
    globalThis.Headers = Headers;
    globalThis.Request = Request;
    globalThis.Response = Response;
    globalThis.FormData = FormData;
  }
}
module.exports = {
  common: {
    minifyWhitespace: true,
    target: 'es2020',
  },
  sourcemap: 'inline',
  config: {
    '.html': {
      loader: 'text',
    },
    '.tsx': {
      jsxFactory: 'qwikJsx.h',
      jsxFragment: 'qwikJsx.Fragment',
      banner: bannerTSX,
      target: 'es2020',
      loader: 'tsx',
      minify: false,
    },
    '.ts': {
      loader: 'ts',
      banner: bannerTS,
      minify: false,
    },
  },
};
