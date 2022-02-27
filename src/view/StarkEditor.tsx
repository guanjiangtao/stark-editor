import React from "react";
import { Editor } from "./editor/Editor";

export interface StarkEditorProps {}

export interface StarkEditorState {}


export class StarkEditor extends React.Component<StarkEditorProps, StarkEditorState> {

    constructor(props: StarkEditorProps) {
        super(props);

        this.state = {
            
        };
    }

    public componentDidMount(): void {

    }

    public componentWillUnmount(): void {

    }

    public componentDidUpdate(prevProps: StarkEditorProps, prevState: StarkEditorState): void {
        
    }

    public render() {
        const props = {
            width: 300,
            height: 100,
        }

        return (
            <div id = "stark-editor">
                <Editor {...props} />
            </div>
        );
    }
}