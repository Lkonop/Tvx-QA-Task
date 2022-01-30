import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { ReservationPage } from "../../reservationHelper";
import { PresetReservation } from "../../reservationHelper"

Given('I open reservation page', () => {
    ReservationPage.visit()
})

When('I submit rental details', () => {
    PresetReservation.presetDetails()
})

And('I choose and accept rental offer', () => {
    PresetReservation.acceptOffer()
})

Then('I confirm reservation', () => {
    cy.confirmRes()
})

And('I should see four alert messages', () => {
    PresetReservation.blankRentFormAlerts()
})