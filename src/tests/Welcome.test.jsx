import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Welcome from "../components/Welcome"

describe("Testing Welcome mounting", () => {
    it("checks if alert is mounted correctly", () => {
        // 1-montare il componente
        render(<Welcome />)
        // 2-individuare gli elementi da testare
        const alert = screen.getByRole("alert")
        //  3
        // 4-verifica
        expect(alert).toBeInTheDocument()
    })
})