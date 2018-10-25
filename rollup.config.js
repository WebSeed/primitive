import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

import { dependencies, peerDependencies } from './package.json'

const input = 'src/index.js'

const external = [
  ...Object.keys(dependencies),
  ...Object.keys(peerDependencies),
]

const plugins = [
  resolve({
    extensions: ['.js', '.jsx'],
  }),
  babel({
    exclude: 'node_modules/**',
  }),
]

const cjs = {
  input,
  output: {
    file: 'lib/primitive.js',
    format: 'cjs',
    sourcemap: true,
  },
  external,
  plugins,
}

const es = {
  input,
  output: {
    file: 'es/primitive.js',
    format: 'es',
    sourcemap: true,
  },
  external,
  plugins,
}

export default [cjs, es]
