const { Board } = require('../src/board');

describe('Game creation phase', () => {
	const board = new Board(3, 3);

	it('should create a board of 3x3', () => {
		const { rows, columns } = board.getSize();
		expect(rows).toBe(3);
		expect(columns).toBe(3);
	});

	it('should print the fresh 3x3 board', () => {
		const expectedBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
		expect(board.print()).toBe(expectedBoard);
	});
});
