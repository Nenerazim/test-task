import {fileURLToPath} from 'url';

export const alias = {
	'@app': fileURLToPath(new URL('../../src/app', import.meta.url)),
	'@ui': fileURLToPath(new URL('../../src/ui', import.meta.url)),
	'@': fileURLToPath(new URL('../../src', import.meta.url))
};
