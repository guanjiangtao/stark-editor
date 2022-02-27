import React from "react";
import './editor.css';

export interface EditorProps {
    /**
     * 编辑器的宽度
     */
    width: number;
    /**
     * 编辑器的高度
     */
    height: number;
}


/**
 * 编辑器组件
 */
export class Editor extends React.Component<EditorProps, {}> {

    constructor(props: EditorProps) {
        super(props);
    }

    private handleCompositionStart = (event: React.CompositionEvent<HTMLDivElement>): void => {
        console.log(event)
    }
    
    private handleCompositionEnd = (event: React.CompositionEvent<HTMLDivElement>): void => {
        console.log(event)
    }

    private handleInput = (event: any): void => {
        const inputValue = event.target.innerText; // 获取输入的内容
        const starkEditorView = document.getElementById("stark-editor-view")
        
        const input = document.createElement("div");
        input.innerText = inputValue;

        if (starkEditorView) {
            starkEditorView.appendChild(input)
        }
        event.preventDefault();
    }

    public render(): React.ReactNode {
        return (
            <div
                id = "stark-editor-view"
                contentEditable="true"
                style={
                    {
                        width: this.props.width,
                        height: this.props.height,
                    }
                }
                onCompositionStart={this.handleCompositionStart}
                onCompositionEnd={this.handleCompositionEnd}
                onInput={this.handleInput}
            ></div>
        );
    }
}