(function() {

	var solution = {
		node: {
			lint: {
				pattern: ['*.cpp', 'math-functions/**/*.cpp', 'math-functions/**/*.h'],
				options: 'defaultLintOptions'
			},
			test: false,
			bundle: {
				compiler: {
					options: ''
				},
				entry: 'index.java',
				files: ['utilities/**/*.java'],
				dependencyPaths: [
					'cpp_modules/catch'
				],
				output: {
					file: 'index'
				}
			}
		},
		browser: false,
		dirs: {
			node: ['math-functions'],
			browser: false,
			output: 'output',
			development: 'workstation',
			deploy: 'deploy'
		}
	};

	var publicAPI = {
		solution
	};

	module.exports = publicAPI;
	
})();
