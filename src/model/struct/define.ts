import { FontProperty } from "./font_property";

/**
 * 属性类型
 */
export enum TextPropertyType {
    isBold = 'bold', // 粗体
    isItalic = 'italic', // 斜体
    isUnderline = 'underline', // 下划线
    isStrikethrough = 'strikethrough', // 删除线
    isSuperscript = 'superscript', // 上标
    isSubscript = 'subscript', // 下标
    isSmallCaps = 'smallCaps', // 小写
    isAllCaps = 'allCaps', // 全部大写
    isHidden = 'hidden', // 隐藏
    isDoubleStrikeThrough = 'doubleStrikeThrough', // 双删除线
    isDoubleUnderline = 'doubleUnderline', // 双下划线
    isDottedUnderline = 'dottedUnderline', // 虚线下划线
    isShadow = 'shadow', // 阴影
}
/**
 * 字体属性
 */
export enum FontPropertyType {
    font = 'font', // 字体
    fontSize = 'fontSize', // 字号
    fontColor = 'fontColor', // 字体颜色
    fontHighlightColor = 'fontHighlightColor', // 字体高亮颜色
    fontBackgroundColor = 'fontBackgroundColor', // 字体背景颜色
    fontSpacing = 'fontSpacing', // 字间距
    fontKerning = 'fontKerning', // 字距
    fontStyle = 'fontStyle', // 字体样式
    fontFamily = 'fontFamily', // 字体类型
    fontWeight = 'fontWeight', // 字体粗细
}

export type BasePropetryType = TextPropertyType | FontPropertyType;

export type BasePropertyTypes = boolean | string | number | FontProperty;