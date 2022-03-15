import 'jest';
import { TextRange } from '../model/struct/text_range';
import { TextModel } from '../model/text_model/text_model';


/**
 * 文字流 test
 */
describe('test text model', () => {

    const model = TextModel.createModel();
    let id = '';
    test('setText', () => {
        id = model.setText('你好');
        model.setText('吗');
        model.setText('不', 1, id);
        expect(model.text).toBe('你不好吗');
    });

    test('deleteText', () => {
        model.deleteText(id, new TextRange(0, 1));
        expect(model.text).toBe('不好吗');
    });
});
