class Board {
	constructor(rows, columns) {
		this.rows = rows;
		this.columns = columns;
	}

	getSize() {
		return { rows: this.rows, columns: this.columns };
	}

	print() {
		const rowSeparator = `+${Array(this.columns).fill('-').join('+')}+\n`;
		const rowTemplate = `|${Array(this.columns).fill(' ').join('|')}|\n`;
		const rows = Array(this.rows).fill(rowTemplate);
		const renderedBoard = rowSeparator + rows.join(rowSeparator) + rowSeparator.trim();
		return renderedBoard;
	}
}

module.exports = { Board };
