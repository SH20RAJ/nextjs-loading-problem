> https://github.com/vercel/next.js/discussions/64822

Summary
if i click and navigate to about from the main page after loading of data in main page and then i come from about to the main page using navigation i see the loading once or req too the api is sent once more time, I don't want that if the user already loaded the api and navigated then come back it should show the previous data ( even it should show the scroll loc until I scrolled on the main page)

"When a user navigates from the main page to the about page after the data has loaded on the main page, and then returns to the main page using navigation, I want to ensure that the data isn't reloaded unnecessarily. I want the previously fetched data to be displayed without triggering another API request. Additionally, I'd like the scroll position of the main page to remain unchanged, even after navigating away from and back to the main page."

See like youtube is also a single page app and fetches the video feeds from api (client side). but when we navigate to another page then come back we see the previous video feeds but in my case if I come back to my page it recalls the api fetch and show the data (only in case of client component )

Test and open preview on Stackblitz :- https://stackblitz.com/~/github.com/SH20RAJ/nextjs-loading-problem
Github Repo :- https://github.com/SH20RAJ/nextjs-loading-problem


https://github.com/SH20RAJ/nextjs-loading-problem/assets/66713844/63a0b094-35c7-4c54-9c10-126feefd4cc7


Specific Commit :- https://github.com/SH20RAJ/nextjs-loading-problem/tree/84f8788a05479c63cd8737a9d5a340a31aabf69e

// Used Suspense
// Used loading state from useState()
// Used Loading.js

// Still the problem isn't solved yet

// have to do it in client side because server side is working

Additional information
// Used Suspense
// Used loading state from useState()
// Used Loading.js

// Still the problem isn't solved yet


// have to do it in client side because server side is working
Example
https://stackblitz.com/~/github.com/SH20RAJ/nextjs-loading-problem

