import StubFileClass from './stubFile';

export const mainFunction = ( objectToTest ) => {

    const objectToBeStubbed = new StubFileClass();

    objectToTest.stubbedResponse = objectToBeStubbed.functionToStub();

    return objectToTest;
};


