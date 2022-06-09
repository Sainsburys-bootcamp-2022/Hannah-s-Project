
const getBoard = require('./connect4')

describe('When invoking getBoard function', () => {
    it('returns original board state', () => {
        //ARRANGE
        const expectedResult = [
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
            ] 
                  
        //ACT
        const result = getBoard.getBoard()

        //ASSERT
        expect(result).toEqual(expectedResult)
    })

    it('returns original board state', () => {
        //ARRANGE
        const expectedResult = [
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [x, null, null, null, null, null, null],
            ] 
                  
        //ACT
        const result = getBoard.getBoard()

        //ASSERT
        expect(result).toEqual(expectedResult)
    })
})

 const isValidRowOrColumn = require('./connect4')

describe('When array length is 6', () => {
    it('returns true', () => {
        //ARRANGE
        const arrayLength = [6, 5, 4, 3, 2, 1]
        const expectedResult = true

        //ACT
        const result = isValidRowOrColumn.isValidRowOrColumn(arrayLength)

        //ASSERT
        expect(result).toEqual(expectedResult)
    })

    it('returns true', () => {
        //ARRANGE
        const arrayLength = [6, 5, 4, 3, 2, 1, 0]
        const expectedResult = true

        //ACT
        const result = isValidRowOrColumn.isValidRowOrColumn(arrayLength)

        //ASSERT
        expect(result).toEqual(expectedResult)
    })
})
