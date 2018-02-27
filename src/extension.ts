'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {

        for (let i of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            vscode.commands.executeCommand(`workbench.action.openEditorAtIndex${i}`)
            .then(() => {
                // This code does not execute if there is an editor that corresponds to the index number
                // because vscode.commands.executeCommand('workbench.action.openEditorAtIndex[1-9]') does not resolve
                console.log(`openEditorAtIndex${i}`);
            }, (e) => {
                // Furthermore, the promise is never rejected either.
                console.log(`rejected openEditorAtIndex${i}`, e);
            });
        }

        vscode.commands.executeCommand('workbench.action.openLastEditorInGroup')
        .then(() => {
            // This code will execute because vscode.commands.executeCommand('workbench.action.openLastEditorInGroup') does resolve
            console.log('openLastEditorInGroup');
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}