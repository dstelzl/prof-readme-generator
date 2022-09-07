// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': 
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    
    case 'Apache': 
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    
    case 'GNU': 
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    
    case 'Boost': 
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
     
  
    default: return ''
      
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') return '- [License](#license)'
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') return ''
  return `## LICENSE
  
  This project is licensed by the ${license} license.

  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const {myTitle, myDescription, myInstructions, myUsage, myContribution, myTests, myGithub, myEmail, myLicense} = data;
  return `# ${myTitle}
  ${renderLicenseBadge(myLicense)}

  ## DESCRIPTION
  ${myDescription}

  ## TABLE OF CONTENTS
  - [Instructions](#instructions)
  - [Usage](#usage)
  - [Questions](#questions)
  ${renderLicenseLink(myLicense)}

  ## INSTRUCTIONS
  ${myInstructions}

  ## USAGE
  ${myUsage}

  ## CONTRIBUTIONS
  ${myContribution}

  ## TESTS
  ${myTests}

  ${renderLicenseSection(myLicense)}
  ## QUESTIONS
  ${myGithub}
  If you have questions- please reach out to me at: ${myEmail}.

`;
}

module.exports = generateMarkdown;
