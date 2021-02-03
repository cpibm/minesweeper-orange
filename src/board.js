class Board {
	constructor(rows, columns) {
		this.rows = rows;
		this.columns = columns;
	}

	getSize() {
		return { rows: this.rows, columns: this.columns };
	}

	print() {
		return '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
	}
}

module.exports = { Board };
