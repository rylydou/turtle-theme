// An exceptionally useful comment
export default class Theme {
	constructor() {
		this.name = '{{Theme Name}}';
		this.from = '{{Turtle Theme}}';
		this.version = [4, 3, 2];
	}

	printInfo() {
		let semver = this.version.join('.');
		console.log(`${this.name} from ${this.from}\n\t${semver}`);
	}
};
