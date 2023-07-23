const inquirer = require('inquirer');
const fs = require('fs');

const answers = inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project.',
      choices: ['MIT', 'GPLv3', 'Apache', 'Unlicense', 'BSD'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  ])
  // const markdown = generateMarkdown(answers);
  .then((response) => {
    console.log(response);

    fs.writeFile('README.md', JSON.stringify(response, null, '\t'), (err) =>
      err ? console.error(err) : console.log('Success!'))
  });

  