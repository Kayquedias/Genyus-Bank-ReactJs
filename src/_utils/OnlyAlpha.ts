import { LightRule } from 'light-validate';

export const OnlyAlpha: LightRule = async function (value:string) {
    if(value){
        if(new  RegExp("/^[A-Za-z\s]+$/").test(value)){
            throw  'apenas-caracteres-alfabeticos';
        }
    }
}