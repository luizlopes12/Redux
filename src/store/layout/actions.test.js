import { Creators, Types } from './index'

describe('Layout actions', () =>{
    describe('Actions types', () =>{
        test('Deve retornar a action SHOW_MESSAGE', () => {
            expect(Types.SHOW_MESSAGE).toEqual('SHOW_MESSAGE')
         })
         test('Deve retornar a action HIDE_MESSAGE', () => {
            expect(Types.HIDE_MESSAGE).toEqual('HIDE_MESSAGE')
         })
    })
    describe('Actions Creators', () =>{
        test('deve retornar a action creator showMessage',()=>{
            expect(Creators.showMessage()).toEqual({type: Types.SHOW_MESSAGE})
        })
        test('deve retornar a action creator hideMessage',()=>{
            expect(Creators.hideMessage()).toEqual({type: Types.HIDE_MESSAGE})
        })
    })
})