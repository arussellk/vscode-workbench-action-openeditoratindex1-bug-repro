# vscode-workbench-action-openeditoratindex1-bug-repro README

This extension was made with `$ yo` following the intstructions at https://code.visualstudio.com/docs/extensions/example-hello-world.

The purpose of this extension is to demonstrate unexpected behavior with `vscode.commands.executeCommand('workbench.action.openEditorAtIndex1')`

# Steps to see behavior

1. Open this project in VSCode
2. Launch the extension with `Debug > Start Debugging` or `F5`
3. In the window that just launched, execute the editor command `Hello World` (for macOS users, `cmd+shif+P` then type `Hello World` and press enter)
4. View the debug console to see that `openEditorAtIndex1` was never logged

You can read relevant code and comments in `src/extension.ts`
