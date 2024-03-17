/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
      type: 'input',
      name: 'URL',
      message: 'Please enter URL to generate QR Code',
      validate: (answer) => {
          if (answer === '') {
              return 'Please enter a valid URL'
          }
          return true
      }
  },

  ])
  .then((answers) => {
    const url = answers.URL
    const qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_specs.png'));

    fs.writeFile('URL2.txt', url, (err) => {
    if (err) throw err;
    console.log('Your URL has been saved');
})
});













