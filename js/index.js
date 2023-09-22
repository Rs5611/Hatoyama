
function clickBtn1() {

    const userId = document.getElementById("userid");
    const valueUseid = userId.value;

    const password = document.getElementById("password");
    const valuePassword = password.value;


    if (!checkValue(valueUseid)) {
        return;
    }

    if (!checkValue(valuePassword)) {
        return;
    }

    if (valueUseid != "testId") {
        errorMakePage();
        return;
    } else if (valuePassword != "testPass") {
        errorMakePage();
        return;
    } else {
        successMakePage();
    }
}


function errorMakePage() {
    $("#errorMessage").empty();
    $("#errorMessage").append(
        '<div id="errorMessage">ユーザーIDまたはパスワードが違います</div>'
    );
}


function successMakePage() {

    return location.href = './scoreRecord.html';
}

function success() {

    return location.href = './keepPage.html'
}

function checkValue(value) {
    if (!value) {
        errorMakePage();
        return false;
    } else if (value.length < 4 || value.length > 8) {
        errorMakePage();
        return false;
    }
    return true;
}

function clickBtn2() {

    $.ajax({
        url: "localhost:8080/japan/main/java/jp/co/f1/superintro/ch02/resouce/JapanTravelResouce"

    })
        .done(

            success()
    )

}

function clickBtn3() {

    var tableElem = document.getElementById('table_edit');
    var rowElems = tableElem.rows;
    var price = 0;
    for (i = 1, len = 8; i < len; i++) {
        if (rowElems[2].cells[i].innerText == "") {
            break;
        } else {
            price += parseInt(rowElems[2].cells[i].innerText);
        }
    }
    document.getElementById('goukei').innerText = price;

}
