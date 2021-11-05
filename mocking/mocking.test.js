import { mainFunction } from './mocking';
import StubFileClass from './stubFile';

jest.mock('./stubFile');

describe('mainFunction()', ()=> {
    const dummy = {};

    beforeAll(() => {
        StubFileClass.mockImplementation(()=>{
            return { functionToStub: ()=>{
                return 'this is the actual stubbed response';
            }};
        });
    })

    it('should return given object parameter', () => {
        const returnedValue = mainFunction(dummy);

        expect(returnedValue).toBe(dummy);
    });

    it('should call stub function', function () {
        const returnedValue = mainFunction(dummy);

        expect(returnedValue.stubbedResponse).toBe('this is the actual stubbed response');
    });
});