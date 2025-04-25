import { newFlashCard } from '../src/cards/flashcard.js'

describe('FlashCard', () => {
  const card = newFlashCard('Capital of France?', 'Paris')

  test('getQuestion returns correct question', () => {
    expect(card.getQuestion()).toBe('Capital of France?')
  })

  test('getAnswer returns correct answer', () => {
    expect(card.getAnswer()).toBe('Paris')
  })

  test('checkSuccess returns true for exact match', () => {
    expect(card.checkSuccess('Paris')).toBe(true)
  })

  test('checkSuccess returns true for different casing & whitespace', () => {
    expect(card.checkSuccess('   pArIs   ')).toBe(true)
  })

  test('checkSuccess returns false for incorrect answer', () => {
    expect(card.checkSuccess('London')).toBe(false)
  })

  test('toString returns correct string representation', () => {
    expect(card.toString()).toBe('FlashCard[Capital of France?, Paris]')
  })

  test('equals returns true for identical card', () => {
    const sameCard = newFlashCard('Capital of France?', 'Paris')
    expect(card.equals(sameCard)).toBe(true)
  })

  test('equals returns false for different question', () => {
    const diffQ = newFlashCard('Capital of Germany?', 'Paris')
    expect(card.equals(diffQ)).toBe(false)
  })

  test('equals returns false for different answer', () => {
    const diffA = newFlashCard('Capital of France?', 'Berlin')
    expect(card.equals(diffA)).toBe(false)
  })
})
