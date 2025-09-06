⚠️ **Warning:** This extension is no longer active and has been **removed from the VS Code Marketplace**.
It is no longer maintained, and functionality may be broken or unavailable.  
Use at your own risk.


<p align="center">
   <img src="https://github.com/SudoACoder/CodeXpert/assets/58640233/127b2ad3-f325-41d7-95d0-ea2dc446b9ec" alt="banner"/>
   <h1 align="center">a revolutionary coding experience with Code Xpert!</h1>
</p>

CodeXpert is your coding companion, providing advanced language models and a privacy-centric, open-source environment for an effortless coding experience.

## Features

- **Advanced Language Models**: Enhance your coding experience with cutting-edge language models.
  
- **Privacy-Focused**: Your data security is our priority, ensuring your privacy remains intact.

- **Offline Mode**: Seamlessly work offline by running `server.py` locally and configuring the address in the extension's settings.

- **Open Source**: Dive into the source code, contribute, and customize to your heart's content.

- **Free**: Enjoy all the benefits of CodeXpert without spending a dime.

## Installation

1. Install the VS Code Extension.
   
2. *(Optional)* For faster performance or enhanced privacy, clone this repository and run `server.py`:
   
```
   git clone https://github.com/SudoACoder/CodeXpert.git
   cd CodeXpert
   pip install -r requirements.txt
   python server.py
 ```
3. *(Optional)* Open the VS Code extensions settings by clicking on "CodeXpert" in the status bar and enter the address of the local server.

## Usage

- **Code Completion**: Press Ctrl+D to trigger CodeXpert's code completion feature.
  
- **Settings**: Access settings by clicking on the CodeXpert button at the bottom of the VS Code window. Here you can:
  - Switch to Full Mode for more accurate suggestions (though with slower performance)(not active for now!).
  - Customize shortcut keys.
  - Set a custom server URL to run CodeXpert offline using a local server (minimum 1GB RAM required, no GPU required).

## To-Do List

- [ ] Fix the shortcut customization feature in settings.
- [ ] Upgrade the default Free server with GPU support (with donations in the future).
- [ ] Jetbrains Support
- [ ] Neovim Support
- [ ] in Terminal Support!
- [ ] GUI of extension!

## Contribution

Contributions are welcomed! Whether you have ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request. Alternatively, you can contribute by addressing items on the to-do list.

## License

This project is licensed under the Apache License 2.0.
