import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/',
  output: {
    file: 'main.js',
    format: 'iife',
    globals: {
      'phaser': 'Phaser'
    },
  },
  external: ['phaser'],
  plugins: [commonjs(), nodeResolve()]
};