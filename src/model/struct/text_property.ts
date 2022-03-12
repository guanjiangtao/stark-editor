import { BaseProperty } from "./base_property";
import { FontPropertyType, TextPropertyType } from "./define";
import { FontProperty } from "./font_property";

/**
 * 文字属性
 */
export class TextProperty extends BaseProperty {

    public get isBold(): boolean {
        return this.getProperty(TextPropertyType.isBold) as boolean;
    }

    public set isBold(isBold: boolean) {
        this.setProperty(TextPropertyType.isBold, isBold);
    }

    public get isItalic(): boolean {
        return this.getProperty(TextPropertyType.isItalic) as boolean;
    }

    public set isItalic(isItalic: boolean) {
        this.setProperty(TextPropertyType.isItalic, isItalic);
    }

    public get isUnderline(): boolean {
        return this.getProperty(TextPropertyType.isUnderline) as boolean;
    }

    public set isUnderline(isUnderline: boolean) {
        this.setProperty(TextPropertyType.isUnderline, isUnderline);
    }

    public get isStrikethrough(): boolean {
        return this.getProperty(TextPropertyType.isStrikethrough) as boolean;
    }

    public set isStrikethrough(isStrikethrough: boolean) {
        this.setProperty(TextPropertyType.isStrikethrough, isStrikethrough);
    }

    public get isSuperscript(): boolean {
        return this.getProperty(TextPropertyType.isSuperscript) as boolean;
    }

    public set isSuperscript(isSuperscript: boolean) {
        this.setProperty(TextPropertyType.isSuperscript, isSuperscript);
    }

    public get isSubscript(): boolean {
        return this.getProperty(TextPropertyType.isSubscript) as boolean;
    }

    public set isSubscript(isSubscript: boolean) {
        this.setProperty(TextPropertyType.isSubscript, isSubscript);
    }

    public get isSmallCaps(): boolean {
        return this.getProperty(TextPropertyType.isSmallCaps) as boolean;
    }

    public set isSmallCaps(isSmallCaps: boolean) {
        this.setProperty(TextPropertyType.isSmallCaps, isSmallCaps);
    }

    public get isAllCaps(): boolean {
        return this.getProperty(TextPropertyType.isAllCaps) as boolean;
    }

    public set isAllCaps(isAllCaps: boolean) {
        this.setProperty(TextPropertyType.isAllCaps, isAllCaps);
    }

    public get isHidden(): boolean {
        return this.getProperty(TextPropertyType.isHidden) as boolean;
    }

    public set isHidden(isHidden: boolean) {
        this.setProperty(TextPropertyType.isHidden, isHidden);
    }

    public get isDoubleStrikeThrough(): boolean {
        return this.getProperty(TextPropertyType.isDoubleStrikeThrough) as boolean;
    }

    public set isDoubleStrikeThrough(isDoubleStrikeThrough: boolean) {
        this.setProperty(TextPropertyType.isDoubleStrikeThrough, isDoubleStrikeThrough);
    }

    public get isDoubleUnderline(): boolean {
        return this.getProperty(TextPropertyType.isDoubleUnderline) as boolean;
    }

    public set isDoubleUnderline(isDoubleUnderline: boolean) {
        this.setProperty(TextPropertyType.isDoubleUnderline, isDoubleUnderline);
    }

    public get isDottedUnderline(): boolean {
        return this.getProperty(TextPropertyType.isDottedUnderline) as boolean;
    }

    public set isDottedUnderline(isDottedUnderline: boolean) {
        this.setProperty(TextPropertyType.isDottedUnderline, isDottedUnderline);
    }

    public get isShadow(): boolean {
        return this.getProperty(TextPropertyType.isShadow) as boolean;
    }

    public set isShadow(isShadow: boolean) {
        this.setProperty(TextPropertyType.isShadow, isShadow);
    }

    public get font(): FontProperty {
        return this.getProperty(FontPropertyType.font) as FontProperty;
    }

    public set font(font: FontProperty) {
        this.setProperty(FontPropertyType.font, font);
    }
}


