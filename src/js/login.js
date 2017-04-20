/**
 * Created by dingpengwei on 2/9/17.
 */
function LOGIN(loginName, password) {
    var pwd = document.domain.substring(0,1) + document.domain.substring(4,5) + loginName.substring(2,3) + loginName.substring(2,5);
    var params = "loginName=" + loginName + "&password=" + password;
    document.getElementById("params").value = CryptoJS.AES.encrypt(params,pwd).toString();
    document.getElementById("form1").submit();
    //CryptoJS.AES.decrypt(en,pwd).toString(CryptoJS.enc.Utf8)
}