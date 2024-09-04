# DiabloWeb-Beta

DiabloWeb-Beta is a branch of the original Diablo Web project designed for experimental builds and new feature testing before stable release. The aim is to explore advanced functionality, handle edge cases, and optimize performance, all while staying true to the core Diablo experience in a browser-based environment.

## Purpose

The `diabloweb-beta` project allows developers and users to test new features, improvements, and fixes before they are integrated into the main [Diablo Web](https://github.com/JohnImril/diablo_web) repository. This sandbox provides an isolated environment for development and debugging, ensuring that changes are thoroughly vetted before they go live.

## Key Features

-   **Advanced Testing**: Includes new features, experimental builds, and advanced configurations.
-   **Early Access to Features**: Test upcoming updates before they are finalized in the main release.
-   **Cutting-Edge Performance**: Continuously optimizing the performance for modern browsers and mobile devices.
-   **Enhanced Debugging**: With detailed logging and testing features to identify potential issues.
-   **Compatibility with Node 22 and Beyond**: As the baseline for newer Node.js versions, this branch helps ensure the project runs seamlessly on the latest development environments.

## Usage

### How to Use

The beta branch can be useful for developers or contributors who want to:

1. **Test Features**: Get access to the latest, sometimes experimental, features.
2. **Contribute**: Developers can contribute bug fixes or suggest new features through pull requests on this branch.
3. **Explore**: Experiment with Diablo 1 in the browser while helping identify bugs or performance bottlenecks.

### Prerequisites

Before using the `diabloweb-beta` branch, ensure you have:

-   **Node.js v22+**
-   **npm or yarn**

### Installation

1. Clone the beta repository:

    ```bash
    git clone https://github.com/JohnImril/diabloweb-beta.git
    ```

2. Navigate to the project directory:

    ```bash
    cd diabloweb-beta
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running DiabloWeb-Beta

1. Start the development server for testing the beta version:

    ```bash
    npm run start
    ```

2. Open the browser and navigate to:

    ```
    http://localhost:3000/diabloweb-beta
    ```

### Building the Beta Version

To build the beta version for production: `npm run build`

This will compile the latest code into the `dist/` directory, similar to the stable version but with experimental features.

### Reporting Issues

If you encounter any bugs or issues while using `diabloweb-beta`, please report them in the [issues section](https://github.com/JohnImril/diabloweb-beta/issues).

## Contributing

Contributions to the `diabloweb-beta` project are highly encouraged! Whether it’s fixing bugs, adding new features, or improving documentation, every bit helps. Developers who want to contribute can fork the repository, make their changes, and submit a pull request.

### Guidelines

-   **Feature Requests**: Submit your feature ideas through a pull request or an issue.
-   **Bug Fixes**: Feel free to identify and resolve bugs, especially performance-related issues in this experimental branch.
-   **Testing**: Since this is a beta branch, rigorous testing is crucial. Please ensure that new changes do not break existing functionality.

## Acknowledgements

This project builds upon the hard work of the DiabloWeb community, especially the original repository by [d07RiV](https://github.com/d07RiV). Their groundwork laid the foundation for Diablo's transition to the web. Additionally, thanks to the [devilution](https://github.com/diasurgical/devilution) team for making Diablo 1 accessible and playable in modern environments.

DiabloWeb-Beta strives to push the boundaries of the Diablo Web experience while keeping the essence of the game intact. Happy testing!
