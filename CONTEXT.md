# Context File

## What is this file for?

Please use this file to give some context and meaning to the decisions you've
made when implementing a solution to the
exercise.

## What are we looking for?

You are welcome to keep it brief but please jot down a few notes on:

- Why you have chosen a library?
- What other libraries you have considered (if any)

The headings below are just there to guide you, feel free to remove them or add
new ones.

---

### Approach to solution

My approach to the solution consisted of seeing where I could break down the components into a simpler implementation. This can be seen with the separation of the `SearchResultItem` being split out into `MovieCard`, `TvCard` and `PersonCard`. There is still a great amount of duplicated component code in there, based on the material UI components, and this can be split up further into a base card component that could take in the appropriate properties for each part of the component, such as: name, subtext, description, popularity/rating value, chip type. Unfortunately I ran out of time to do this.

I also refactored the API to call a general `GET` function which simply calls the `fetch()` function, providing a URL to determine what API call to execute. These calls were also put behind hooks, and called upon a user performing a search. The API result interfaces were refactored to be based on a parent interface, which contained properties shared across all three types, along with a couple of other properties, `title` and `name` to easier work with generating the person known for list.

**Note**: the accent colours of each result type will not match, for simplicity I made use of the default material UI colours to get a close result (primary, secondary, success)

### Testing

Unfortunately I was unable to complete the suite of tests which I wanted to do, but for the sake of this test, I will outline what my goal was:

- For each component, a snapshot test to show a valid component, when the appropriate data is provided, and to not show if the component does not have said data. (I put a basic snapshot test together adding to the `Search` test suite.) Snapshots can be useful for test suites as it shows if even the smallest change in data or the UI through moving components around, or CSS changes, would fail the test.
- The card components: tests to ensure data loaded shows on the correct sub components (text, chip, popularity/rating value)
- On the search component, mocking the use hooks to test returning good and bad data
- Testing the hooks to mock call the API to return good and bad data
- Testing the API to ensure appropriate measure are taken for the appropriate responses
