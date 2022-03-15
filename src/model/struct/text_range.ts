import { TextProperty } from "./text_property";

/**
 * 范围属性描述
 */
export class TextRange {
    /**
     * 开始位置
     */
    private _start: number;
    /**
     * 结束为止
     */
    private _end: number;

    private _len: number;
    /**
     * 该位置对应的属性
     */
    private _property: TextProperty;

    constructor(start: number, end: number, property?: TextProperty) {
        this._start = start;
        this._end = end;
        this._property = property ? property : new TextProperty();
    }

    public start(): number {
        return this._start;
    }

    public end(): number {
        return this._end;
    }

    public property(): TextProperty {
        return this._property;
    }
    
    public get len(): number {
        return this._start + this._len;
    }

    public setStart(start: number) {
        this._start = start;
    }

    public setLen(len: number) {
        this._len = len;
    }
}