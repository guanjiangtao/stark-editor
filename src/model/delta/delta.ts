import { TextProperty } from "../struct/text_property";
import { TextRange } from "../struct/text_range";
import { TextStream } from "../text_model/text_model";


/**
 * 原子操作API
 * @description 目前编辑器比较简单三个原子操作，即可覆盖所有操作。
 */
export class Delta {
    // 文字流对象
    private textStream = TextStream.instance();

    public insertText(text: string, textRange: TextRange): void {
        if (text === '') {
            return;
        }
        const textIndex = this.textStream.text;
    }

    public deleteText(start: number, length: number): void {
        
    }

    public modifyProperty(start: number, end: number, property: TextProperty): void {

    }
}