// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case 'MIT':
      badge = '![License](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'GNU':
      badge = '![License](https://img.shields.io/badge/License-GNUPL-red.svg)';
      break;
    default:
      badge = '';
      break;    
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case 'MIT':
      link = '(https://opensource.org/licenses/MIT)';
      break;
    case 'GNU':
      link = '(https://opensource.org/licenses/gpl-license)';
      break;
    default:
      link = '';
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return "";
  } else {
    return '##License'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  This project is license under ${data.license}
  ## Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;
