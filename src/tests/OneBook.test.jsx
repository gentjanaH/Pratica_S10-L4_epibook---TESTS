import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import OneBook from "../components/OneBook"
import fantasy from "../data/fantasy.json"

describe("Testing Onebook borders", () => {

    it("checks if the card has border-info at the beginning", () => {

        render(<OneBook book={fantasy[0]} />)
        const cards = screen.getByTestId('card-libri')
        expect(cards).toHaveClass("border-info")


    })

    it("checks if the border become border-danger", () => {
        render(<OneBook book={fantasy[0]} selectedBook={null} handleBookSelect={() => { }} />)
        const image = screen.getByText(/copertina-libro/i)

        fireEvent.click(image)

        const card = screen.getByTestId("card-libri")

        expect(card).toHaveClass("border-danger")

    })
})