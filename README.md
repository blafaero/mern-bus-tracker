# Project: MIT Live Bus Tracker

The days of sitting outside in the rain or snow are over! With this real-time bus tracker, you can view the occupancy status of all active MIT buses as well as where they are currently located. And with updates every 5 seconds, you will always know exactly when to run to the bus stop.\

## How-To Run

To run this code, first download the git repository. To successfully use the software, you will be required to have an API access token from [mapbox.com](https://account.mapbox.com/). Follow the instructions there to create an account and get an access token.

Once finished, go back to your locally downloaded repository and drag and drop the `index.html` file into your browser. You will be prompted to enter you access token. Once successful, you should be able to view the live tracking data by clicking the button in the upper-left corner. To make it so you do not have to enter your access token every time, open the `index.html` file and find the line that says `//mapboxgl.accessToken = ""`. Paste your access token inbetween the double quotes and delete the two slashes at the beginning of the line. Save the file and try reloading it in your browser.

## Roadmap

The code is fairly robust, but I would love to add in additional features the will benefit the users:

- Add in dialogue boxes if the user clicks a specific bus to display more information, such as route.
- API prompting within my portfolio.
  - Unfortunately, the API token box does not pop up for the preview on my portfolio page. I would like to find a way to still allow users to preview the code without having to download.

## License

MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
