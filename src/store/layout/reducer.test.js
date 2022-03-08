import reducer from './index'

describe('Layout Reducer', () =>{
    test('deve retornar o state inicial', () =>{
        expect(reducer(undefined, {})).toEqual({showMessage: false})
    })
    test('deve retornar a prop showMessage=true', () =>{
        expect(reducer(undefined, {type: 'SHOW_MESSAGE'})).toEqual({showMessage: true})
    })
    test('deve retornar a prop hideMessage=false', () =>{
        expect(reducer(undefined, {type: 'HIDE_MESSAGE'})).toEqual({showMessage: false})
    })
})