Feature: Car Reservation
   Scenario: Rent Form Alerts
     Given I open reservation page
     When I submit rental details
     And I choose and accept rental offer
     Then I confirm reservation
     And I should see four alert messages