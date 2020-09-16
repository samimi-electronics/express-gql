const bookRepository = require('./book.repository')


test('adds book to book array', () => {
    expect(bookRepository.create('book name')).toBe([{
            id: String,
            name: 'book name'
    }])
})