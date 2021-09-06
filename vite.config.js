import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { injectHtml } from 'vite-plugin-html';

const isNewG6 = true;

const g6Script = [
  isNewG6
    ? `<script src="https://gw.alipayobjects.com/os/lib/antv/g6/4.3.6/dist/g6.min.js"></script>`
    : `<script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-3.2.3/build/g6.js"></script>`,
  `<script>window.isNewG6 = ${isNewG6}</script>`,
].join('');

// https://vitejs.dev/config/
export default () =>
  defineConfig({
    plugins: [
      reactRefresh(),
      injectHtml({
        injectData: {
          g6Script,
        },
      }),
    ],
  });
