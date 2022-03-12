import 'jest';
import { TextStream } from '../model/text_stream/text_stream';


describe('test text stream', () => {

    const textStream = TextStream.instance();

    test('setText', () => {
        const id = textStream.setText('你好', -1);
        textStream.setText('吗', -1);
        textStream.setText('不', 1, id);
        expect(textStream.text).toBe('你不好吗');
    });
});