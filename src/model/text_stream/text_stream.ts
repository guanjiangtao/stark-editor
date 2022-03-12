import { StringUtil } from "../../common/util";
import { TextNode } from "../struct/define";
import { TextProperty } from "../struct/text_property";
import { TextRange } from "../struct/text_range";

/**
 * 文字流
 */
export class TextStream {
    /**
     * 文字流的字符串
     */
    private _textMap: Map<string, TextNode> = new Map<string, TextNode>();

    private static _instance: TextStream;
    /**
     * 初始化文字流
     */
    private constructor() {
        const textId = StringUtil.getRandomId();
        // 初始化节点
        const node: TextNode = {
            text: '', // 占位符，
            textRange: new TextRange(0, 1, new TextProperty())
        };
        this._textMap.set(textId, node); // 首行隐藏字符
    }

    public static instance(): TextStream {
        if (!this._instance) {
            this._instance = new TextStream();
        }
        return this._instance;
    }

    public get text(): string {
        let text = "";
        this._textMap.forEach((value, key) => {
            text += value.text;
        });
        return text;
    }

    public get getTextLength() {
        return this.text.length;
    }

    public setText(attr: string, pos: number, id?: string) {
        if (id && this._textMap.has(id)) {
            const oldNode = this._textMap.get(id)!;
            const node: TextNode = {
                text: oldNode.text.slice(0, pos) + attr + oldNode.text.slice(pos),
                textRange: new TextRange(oldNode.textRange.start(), oldNode.textRange.end() + attr.length)
            };
            this._textMap.set(id, node);
            return id;
        } else {
            const id = StringUtil.getRandomId();
            const insertPos = pos < 0 ? this.getTextLength : this.getTextLength + pos;
            const node: TextNode = {
                textRange: new TextRange(insertPos, attr.length),
                text: attr,
            }
            this._textMap.set(id, node);
            return id;
        }
    }
}