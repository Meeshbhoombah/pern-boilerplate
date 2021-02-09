# pern-boilerplate
## Table of Contents
- [Getting Started](#getting-started)
    + [Windows](#windows)
    + [Mac OS](#mac-os)
- [Installing](#installing)

## Getting Started
### Prerequisites
- [Homebrew](https://brew.sh/) (Mac OS) or [Chocolatey](https://docs.chocolatey.org/en-us/) (Windows)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

Clone this repository and navigate to its root, then do the following (based on
your operating systeem):

### Windows
#### Chocolatey
First, download Chocolatey. Follow the instructions [here](https://docs.chocolatey.org/en-us/choco/setup#installing-chocolatey).

#### Node.js
Then, install the Node.js package.
```
cinst nodejs.install
```

#### npm
Confirm that `npm` was installed.
```
npm --version
```
Your output should look something like:
```
7.5.0
```

### Mac OS
#### Homebrew
First, download Homebrew via the Terminal.
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then, check your system to ensure that Homebrew has installed without problems.
```
brew doctor
```
If not, be sure to follow the fixes that `brew doctor` suggests.

After that, run a fetch for the latest version of Homebrew (just in case).
```
brew update
```

#### Node.js
With Homebrew we can install Node.js. First, install the formula.
```
brew install node
```

Then, run a fetch for the latest version of Node.js (just in case).
```
brew update node
```

#### npm
Confirm that `npm` was installed.
```
npm --version
```
Your output should look something like:
```
7.5.0 
```

### Installing
```
npm install
```

## Deployment
## Built With
## Authors
## License
## Acknowledgements

