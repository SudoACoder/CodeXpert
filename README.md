# CodeXpert

Welcome to CodeXpert: your coding companion, always there to assist! This privacy-centric, completely free, open-source tool seamlessly operates with servers or offline. With our VS Code extension, coding becomes effortless, thanks to advanced language models. Embrace a revolutionary coding experience with CodeXpert!

## Features

- Advanced Language Models: Enhance your coding experience with cutting-edge language models.
- Privacy-Focused: CodeXpert prioritizes your privacy, ensuring your data remains secure.
- Offline Mode: Work seamlessly offline by running server.py locally and configuring the address in the extension's settings.
- Open Source: Dive into the source code, contribute, and customize to your heart's content.
- Free: Enjoy all the benefits of CodeXpert without spending a dime.

## Installation

1. [Install the VS Code Extension (Click Here)](https://marketplace.visualstudio.com/items?itemName=codexpert.codexpert).
2. *(Optional)* For faster performance or enhanced privacy, clone this repository and run server.py:
   
   ```
   git clone https://github.com/SudoACoder/CodeXpert.git
   cd CodeXpert
   pip install -r requirements.txt
   python server.py
   ```
3. *(Optional)* Now open the VS Code extensions settings by clicking on "CodeXpert" in the status bar and enter the address of the local server.

## Usage

- Code Completion: Press Ctrl+D to trigger CodeXpert's code completion feature.
- Settings: Access settings by clicking on the CodeXpert button at the bottom of the VS Code window. Here you can:
  - Switch to Full Mode for more accurate suggestions (though with slower performance).
  - Customize shortcut keys.
  - Set a custom server URL to run CodeXpert offline using a local server (minimum 1GB RAM required, no GPU required).

## To-Do List

- [ ] Fix the shortcut customization feature in settings.
- [ ] Upgrade the default Free server with GPU support (with donations in the future).

## Contribution

Contributions are welcomed! Whether you have ideas, suggestions, or bug fixes, feel free to open an issue or submit a pull request. Alternatively, you can contribute by addressing items on the to-do list!

We're just getting started, and with the help of the amazing open-source community, we aim to create a completely free and open-source Copilot!

Even a simple thing like staring this repo can help a lot :)

## License

This project is licensed under the Apache License 2.0.
