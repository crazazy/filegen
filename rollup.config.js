import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';

import pkg from './package.json'

const PRODUCTION = !process.env.ROLLUP_WATCH

export default {
	input: 'src/app.js',
	output: [
		{
			format: 'umd',
			file: pkg.main
		},
		{
			format: 'esm',
			file: pkg.module
		}
	],
	plugins: [
		resolve(),
		json(),
		commonjs(),
		vue({
			template: {
				isProduction: PRODUCTION
			}
		}),
		PRODUCTION && terser()
	]
}
