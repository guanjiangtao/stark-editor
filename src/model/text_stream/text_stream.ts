import { StringUtil } from "../../common/util";
import { TextProperty } from "../struct/text_property";
import { TextRange } from "../struct/text_range";

/**
 * 文字流
 */
export class TextStream {
    /**
     * 文字流的字符串
     */
    private _textMap: Map<string, string> = new Map<string, string>();

    private _rangeList: Map<string, TextRange> = new Map<string, TextRange>();

    constructor() {
        const textId = StringUtil.getRandomId();
        this._textMap.set(textId, '\0x1'); // 首行隐藏字符
        this._rangeList.set(textId, new TextRange(0, 0, new TextProperty()));
    }

    public get text(): string {
        let text = "";
        this._textMap.forEach((value, key) => {
            text += value;
        });
        return text;
    }

    public get getTextLenght() {
        return this.text.length;
    }
}