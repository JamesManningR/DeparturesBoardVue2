# README #

## Overview ###

Your task is to build a flight Departures board as per [this design](https://www.figma.com/file/Kr6pYxQbIdbfD5wG3Mo6QP/Tech-Test-FID?node-id=2%3A2), and populate it with data consumed from the [flights data API](https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata).

We would expect this task to take a few hours, however there is no strict time limit and you won't be judged on how long it takes you to complete.

## Details ###

**Your solution MUST:**

* Function as a single page app.
* Use HTML and CSS (using pre-compilers such as LESS and Sass or CSS-in-JS is fine).
* Use **VueJS v2** and vanilla JavaScript. You *may* use Nuxt - we'll leave this up to you.
* Support the major browsers (Chrome, Firefox, Safari, Edge).
* Be responsive.
* Have (partial or full) test coverage.
* Include a README.md with details of how to run your solution, and any other information you think we might want.

**Your solution MUST include the following features:**

* Include a form below the Departures board to allow the user to select each flight,
and update the status. Status options should include:
  * Free text
  * Departed
  * Diverted
  * Delayed
  * Cancelled

* Error handling - if the API call fails, an error message should be displayed to the user.

**Optional Enhancements:**

If you'd like to go above and beyond the minimum requirements, we'd love you to show us what you're capable of!

Here are some pointers you might like to consider:

* How you might use arrivalAirport.countryName to improve the Departures board UI?
* How will the board look before it receives data?
* How will the board update once it receives data?
* How should the flights be ordered on the board?
* How will the board update when a flight's status is updated?
* If a flight is diverted, what happens to the destination on the board?
* What next steps might you take? You can include these in your README.md.

## External Packages ###

You are free to use external packages in your solution. Links to any external packages should be included in your README.md, along with
your reasoning for using each package.
