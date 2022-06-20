import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'library'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternalPlugin(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                config: {
                    path: './postcss.config.js'
                },
                extensions: ['.css'],
                extract: false
            }),
            terser()
        ]
    }, {
        input: 'dist/esm/types/index.d.ts',
        output: [{
            file: 'dist/index.d.ts', format: 'esm'
        }],
        plugins: [
            dts()
        ],
        external: [/\.css$/]
    }
]