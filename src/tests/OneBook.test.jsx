import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import OneBook from "../components/OneBook"
import fantasy from "../data/fantasy.json"

describe("Testing if the border of the cards is border-info", () => {

    it("checkt if the border  at the begin is border-info", async () => {

        render(<OneBook book={fantasy[0]} />)
        const cards = await screen.findAllByTestId('card-libri')
        expect(cards).toHaveClass("border-info")


    })

    it("check if the border becoms border-danger", async () => {
        render(<OneBook book={fantasy[0]} />)
        const image = await screen.findAllByAltText(/copertina-libro/i)

        fireEvent.click(image)

        const card = await screen.findAllByTestId("card-libri")

        expect(card).toHaveClass("border-danger")

    })
})