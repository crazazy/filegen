import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';

import pkg from './package.json'

const PRODUCTION = !process.env.ROLLUP_WATCH
const injectable = `window.process = {env: {NODE_ENV: ${PRODUCTION?'"production"':'"development"'}}}`;
export default {
	input: 'src/app.js',
	output: [
		{
			format: 'umd',
			file: pkg.main,
			intro: injectable
		},
		{
			format: 'esm',
			file: pkg.module,
			intro: injectable
		}
	],
	plugins: [
		resolve(),
		json(),
		commonjs(),
		vue(),
		PRODUCTION && terser()
	]
}
