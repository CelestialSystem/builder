import * as vscode from 'vscode';

class EventManager {
    
    public readonly fileChangeEvent: vscode.EventEmitter<any>  = new vscode.EventEmitter();
    fireFileChangeEvent(){
        this.fileChangeEvent.fire({});
    }
}

const eventManager = new EventManager();
export default eventManager;