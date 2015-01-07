Feature: Lab1, view directibes using multiple methods
	- Local directives
	- Local directives with attribute
	- Bi-directional scope binding strategy 
	- One-time binding on diLinkText 
	- One-time binding on scope object 
	In addition Home is verified


	@lab1-001
	Scenario: I verify the page is loaded
	Given I visit the home page
	Then I should see "Lemon-Aide: Helping those lemonade vendors" within the page header