/**
 * 字符工具类
 */
export class StringUtil {
    public static getRandomId() {
        return Math.random().toString(36).slice(-6);
    }
}