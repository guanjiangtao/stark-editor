import 'jest';
import { TextModel } from '../model/text_model/text_model';


/**
 * 文字流 test
 */
describe('test text model', () => {

    const model = TextModel.createModel();
    test('setText', () => {
        const id = model.setText('你好');
        model.setText('吗');
        model.setText('不', 1, id);
        expect(model.text).toBe('你不好吗');
    });
});