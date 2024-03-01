const axios = require('axios');
const vscode = require('vscode');

let myStatusBarItem;

function createStatusBarItem() {
    if (myStatusBarItem === undefined) {
      myStatusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        10
      );
      myStatusBarItem.text = 'Coder Xpert';
      myStatusBarItem.tooltip = "Coder Xpert Settings";
      myStatusBarItem.command = "codexpert.openSettings";
    }
  }
  
  function showStatusBarItem() {
    myStatusBarItem.show();
  }

function activate(context) {    
    createStatusBarItem();
    showStatusBarItem();

    // Register command to open settings
    let disposable = vscode.commands.registerCommand('codexpert.openSettings', () => {
        // Options for the quick pick menu
        const options = {
            placeHolder: 'Change Settings',
            matchOnDetail: true,
            matchOnDescription: true
        };

        // Items for the quick pick menu
        const items = [
            { label: 'Change Mode light/full', detail: 'Change the mode value (l or f)' },
            { label: 'Change Server url', detail: 'Enter the url of your own Code Xpert server' },
            { label: 'Change Shortcut Key', detail: 'Change the shortcut key' }
        ];

        // Show the quick pick menu
        vscode.window.showQuickPick(items, options)
            .then(selectedItem => {
                if (!selectedItem) return;
                // Handle user selection
                if (selectedItem.label === 'Change Mode light/full') {
                    vscode.window.showInputBox({ placeHolder: 'Enter mode value (l or f)' })
                        .then(value => {
                            if (value && (value === 'l' || value === 'f')) {
                                // Save the mode value
                                vscode.workspace.getConfiguration().update('codexpert.mode', value, vscode.ConfigurationTarget.Global);
                                vscode.window.showInformationMessage(`Mode changed to ${value}`);
                            } else {
                                vscode.window.showWarningMessage('Invalid mode value. Please enter l or f.');
                            }
                        });
                } else if (selectedItem.label === 'Change Shortcut Key') {
                    vscode.window.showInputBox({ placeHolder: 'Enter new shortcut key' })
                        .then(value => {
                            if (value) {
                                // Save the new shortcut key
                                vscode.workspace.getConfiguration().update('extension.shortcutKey', value, vscode.ConfigurationTarget.Global);
                                vscode.window.showInformationMessage(`Shortcut key changed to ${value}`);
                            }
                        });
                } else if (selectedItem.label === 'Change Server url') {
                    vscode.window.showInputBox({ placeHolder: 'Enter The Server URL Like : https://mrali-codexpert.hf.space/api OR leave empty to use the default free server' })
                    .then(value => {
                        if (value) {
                            // Save the url value
                            vscode.workspace.getConfiguration().update('codexpert.serverurl', value, vscode.ConfigurationTarget.Global);
                            vscode.window.showInformationMessage(`Server changed to ${value}`);
                        }
                    });
                }
            });
    });

    let disposableSendCode = vscode.commands.registerCommand('codexpert.sendCodeToServer', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found!');
            return;
        }

        const code = editor.document.getText();
        const mode = vscode.workspace.getConfiguration().get('codexpert.mode', 'l')

        sendCodeToServer(code, mode);
    });

    context.subscriptions.push(disposableSendCode);
    context.subscriptions.push(disposable);
}

async function sendCodeToServer(code, mode) {
    const url = vscode.workspace.getConfiguration().get('codexpert.serverurl')
    await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: `${mode} Let me think...`,
        cancellable: false
    }, async (progress, token) => {
        try {
            const headers = {
                'Content-Type': 'application/json',
            };
            const requestData = {
                prompt: code,
                mode: mode // Use the mode provided as an argument
            };
            const response = await axios.post(url, requestData, {
                headers: headers
            });

            const content = response.data['responses'][0]['text'];
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                editor.edit(editBuilder => {
                    editBuilder.insert(editor.document.positionAt(code.length), content);
                });
            }
            vscode.window.showInformationMessage('I wrote the code!');
        } catch (error) {
            vscode.window.showErrorMessage('Error : ' + error.message);
        }
    });
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
