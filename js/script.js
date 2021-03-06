const alpha = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯­±‗¾¶§÷¸°¨·¹³²■ ";
const size = [...alpha].length;

const reset = () => {
    document.getElementById("encrypt_text").value = '';
    document.getElementById('encrypt_encrypt').value = '';
    document.getElementById("decrypt_encrypt").value = '';
    document.getElementById('decrypt_text').value = '';
    document.getElementById("shift_decrypt").value = '';
    document.getElementById("shift_encrypt").value = '';
}

const encrypt = (e) =>{
    const encrypt_text = document.getElementById("encrypt_text").value;
    const shift_encrypt = document.getElementById("shift_encrypt").value;
    if( encrypt_text && shift_encrypt ){
        const result = cesar(encrypt_text, shift_encrypt);
        document.getElementById('encrypt_encrypt').value = result;
        document.getElementById("shift_decrypt").value = shift_encrypt;
        document.getElementById("decrypt_encrypt").value = result;
    }else{
        Swal.fire({
            title: 'Atención',
            text: 'Hay campos vacíos',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
}

const decrypt = (e) =>{
    const decrypt_text = document.getElementById("decrypt_encrypt").value;
    const shift_decrypt = document.getElementById("shift_decrypt").value;
    if( decrypt_text && shift_decrypt ){
        const result = cesar(decrypt_text, (shift_decrypt*-1));
        document.getElementById('decrypt_text').value = result;
    }else{
        Swal.fire({
            title: 'Atención',
            text: 'Hay campos vacíos',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }
}

const cesar = (text, shift) => {
    let result = "";
    shift = (shift % size + size) % size;
    for (let i = 0; i<text.length; i++) {
        if( alpha.indexOf(text[i])!=-1 ){
            let position = ((alpha.indexOf(text[i])+shift) % size);
            result += alpha[position];
        }else
            result += text[i];
    }
    return result;
}
    
const init = () => {
    document.getElementById('encrypt').addEventListener('click', encrypt);
    document.getElementById('decrypt').addEventListener('click', decrypt);
    document.getElementById('reset').addEventListener('click', reset);
}

init();