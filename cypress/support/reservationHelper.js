export class ReservationPage {
    static visit() {
        cy.visit('http://qalab.pl.tivixlabs.com/')
        const date = new Date(2021, 1, 30).getTime()
        cy.clock(date)
        cy.log(date)

    }
}

export class PresetReservation extends ReservationPage {
    static presetDetails() {
        cy.get('#country').select('Poland')
        cy.get('#city').select('Wroclaw')
        cy.get('#pickup').type('2022-01-29')
        cy.get('#dropoff').type('2022-01-31')
        cy.get('button[type="submit"]').click()
    }

    static acceptOffer() {
        cy.get('a[href="/details/3"]').click()
        cy.get('a:contains("Rent")').click()
    }

    static blankRentFormAlerts() {
        cy.get('.alert-danger').should('contain', "Name is required").and('be.visible')
        cy.get('.alert-danger').should('contain', 'Last name is required').and('be.visible')
        cy.get('.alert-danger').should('contain', 'Email is required').and('be.visible')
        cy.get('.alert-danger').should('contain', 'Card number is required').and('be.visible')
    }



}