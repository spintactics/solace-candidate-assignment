# Rain Fang - Discussion and Notes

## Improvements Made
### 1. Specialty UI/UX Improvement
- **Expandable Rows**: A good UI/UX generally balances accessibility, readability, and consistency. Having variable heights for the rows isn't good, for the varying amount of specialties. So a better way is to have them all viewable upon row expansion. In case the user wants to compare specialties of multiple different advocates, you can have multiple rows expanded.

- **Specialty Tooltip**: Upon hovering over the specialties, a tooltip will show up showing all the specialties in a list format. This helps balance information readability with the consistency of the table look

### 2. Large Data Improvements
- **Pagination**: In order to go through hundreds of thousands of advocates, the usual way to handle this is pagination. Normally, pagination is handled on the backend, like using Django Python with the `paginate` library. You don't want FE to try and store all the data and paginate from the FE, like we do in this project. FE should only know what it is displaying.

However, showing off my BE experience and doing pagination through there is probably out of the scope of this project.

- **Data Seeding Improvements**: To help stress test the FE's responsiveness to large amounts of data, I improved the seeding of the FE data. It will now generate 100,000 advocates, of randomized data.

### 4. Organization Improvements
- **Folder Organization**: In a mature FE codebase, you will generally have your code organized in a certain way. Usually, you'll have a components, hooks, styles and types folder. We added 3 of those folders here. It's good to have re-usable components in its own folder, for easier re-use in other parts of the project. Same reasoning for hooks, styles, and types.

## Improvements and Recommendations For the Future
### 1. Data Enhancements
- **BE Pagination**: Rather than seeding from the FE, ideally, we get things like the current page's data, total result count, and such from the BE. This would also make the FE more performant since the FE wouldn't have to process so much data.

- **Error and loading handling**: Since we're seeding from the FE, this wasn't necessary. However, in a production environment, where we would be getting this data from the BE, we would need to make use of a loading state, and properly handle errors from the BE response

### 2. User Interface (UI) and UX Improvements
- **Mobile Friendly Design**: Currently, when viewing the page from mobile, it doesn't look good. All the cells are truncated. To address this, I would have to put on my design hat, and think about how to present the data in such dimensions. Perhaps the making the rows thicker so more data with the additional vertical space.

There are multiple ways we can detect that we're on mobile. The usual way is:
if (window.innerWidth <= 768)

### 3. Further Styling Improvements
- **Styling Improvements**: I'm a fan of dark theme. My leetcode is dark theme, my VSC is dark theme. I kept this one light because I noticed your website has your logo branded in green, on a white background, so I wanted to try and keep that. However, using a dark theme + green reminded me too much of The Matrix.

Had I had more time, I would play with the colors a bit more and make a nice dark theme.
- **Positioning Logic**: Implement smart positioning logic to ensure the tooltip is always visible on the screen, even near the edges.

### 4. Code Documentation Improvements
- **Documentation**: Improve inline code comments for better maintainability and understanding by future developers.
- **README Update**: Ensure the README file is comprehensive and includes details about setup, usage, and any limitations.

### 5. Automated Tests
- **Cypress and/or JEST**: It's pretty common for series-A companies to skip on automated tests. Often times, the focus is delivery of features in the pursuit of market fit and growth. However, the transition from series-A to series-B generally means a massive expansion in headcount. Automated tests are best added prior to a massive headcount increase, as every additional dev on the project is another potential source of outages without automated tests.

For this project, I didn't add them, but automated tests is a part of product stability, so while it may not be the highest priority, depending on the stage of the product, it is something that must be eventually added in order to scale.


*Thank you for reviewing this project! Your feedback is greatly appreciated.*
