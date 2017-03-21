/**
 * Created by liyong on 2017/3/17.
 */
$(function checkPhone(){

    var phoneNumReg = /^1[34578]\d{9}$/;

    var phone = document.getElementById('register_box_input.input').value;

    if(!phoneNumReg.test(phone)) {

        document.getElementById('register_box_input.input').focus();

        $(".register_box_font").show();

    }else {
        $(".register_box_input.img").show();
    }

});