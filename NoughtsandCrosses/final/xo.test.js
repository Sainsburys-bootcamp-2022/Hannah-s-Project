const getBoard = require('./academy')

describe('When invoking getBoard function', () => {
    it('returns original board state', () => {
        //ARRANGE
        const expectedResult = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
          ]

        //ACT
        const result = getBoard.getBoard()

        //ASSERT
        expect(result).toEqual(expectedResult)
    })

    it('returns original board state', () => {
        //ARRANGE
        const expectedResult = [
            [null, null, null],
            [null, null, null],
            [x, null, null]
        ]

        //ACT
        const result = getBoard.getBoard()

        //ASSERT
        expect(result).toEqual(expectedResult)
    })
})
