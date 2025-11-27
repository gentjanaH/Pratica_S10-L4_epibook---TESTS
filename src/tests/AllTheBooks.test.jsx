import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import AllTheBooks from "../components/AllTheBooks"
import fantasy from "../data/fantasy.json"

describe("Testing if cards are as much as the books in json file", () => {
    it("Checks if the cards are exactly as the jsons books", () => {
        render(<AllTheBooks />)

        const card = screen.getAllByTestId("book-card")

        expect(card).toHaveLength(fantasy.length)
    })
})