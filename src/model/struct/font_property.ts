import { BaseProperty } from "./base_property";
import { FontPropertyType } from "./define";

export class FontProperty extends BaseProperty {
    public set fontSize(value: number) {
        this.setProperty(FontPropertyType.fontSize, value);
    }

    public get fontSize(): number {
        return this.getProperty(FontPropertyType.fontSize) as number;
    }

    public set fontColor(value: string) {
        this.setProperty(FontPropertyType.fontColor, value);
    }

    public get fontColor(): string {
        return this.getProperty(FontPropertyType.fontColor) as string;
    }

    public set fontHighlightColor(value: string) {
        this.setProperty(FontPropertyType.fontHighlightColor, value);
    }

    public get fontHighlightColor(): string {
        return this.getProperty(FontPropertyType.fontHighlightColor) as string;
    }

    public set fontBackgroundColor(value: string) {
        this.setProperty(FontPropertyType.fontBackgroundColor, value);
    }

    public get fontBackgroundColor(): string {
        return this.getProperty(FontPropertyType.fontBackgroundColor) as string;
    }

    public set fontSpacing(value: number) {
        this.setProperty(FontPropertyType.fontSpacing, value);
    }

    public get fontSpacing(): number {
        return this.getProperty(FontPropertyType.fontSpacing) as number;
    }

    public set fontKerning(value: number) {
        this.setProperty(FontPropertyType.fontKerning, value);
    }

    public get fontKerning(): number {
        return this.getProperty(FontPropertyType.fontKerning) as number;
    }

    public set fontStyle(value: string) {
        this.getProperty(FontPropertyType.fontStyle) as string;
    }

    public get fontStyle(): string {
        return this.getProperty(FontPropertyType.fontStyle) as string;
    }

    public set fontFamily(value: string) {
        this.setProperty(FontPropertyType.fontFamily, value);
    }

    public get fontFamily(): string {
        return this.getProperty(FontPropertyType.fontFamily) as string;
    }

    public set fontWeight(value: string) {
        this.setProperty(FontPropertyType.fontWeight, value);
    }

    public get fontWeight(): string {
        return this.getProperty(FontPropertyType.fontWeight) as string;
    }
}