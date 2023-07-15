Feature: End to End Ecommerece Operation Validation

    Regression of the application

    Scenario: Ecommerce product delivery
        Given I open ecommerce page
        When I add products to cart
        And I validate total price
        Then I place the order


    Scenario: Ecommerce fill the form
        Given I open ecommerce page
        When I fill the form
        And I verify forms behaviour
        Then I select the shop