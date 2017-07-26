import devEnv from './dev.env'
import prodEnv from './prod.env'

let config = {
	dev: {
		env: devEnv
	},
	build: {
		env: prodEnv
	}
};
export default config;