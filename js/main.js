var active_time = 1596517200;
var active_time_fun = null
$(document).ready(function () {
    getActiveTime()
});

function getActiveTime() {
    $.ajax({
        type: "get",
        url: get_url + "getActiveTime",//路径
        data: {},
        dataType: "json",
        success: function (res) {
            console.log("res", res);
            active_time = res.data.time;
            if (res.data.active == 0) {
                $(".hb-open").css("backgroundImage",' url("./img/hb-close.png")');
            } else if (res.data.active == 1) {
                $(".hb-open").css("backgroundImage",' url("./img/hb-open.png")');
            }
            active_time_fun = setInterval(function () {
                countDown();
            }, 1000);
        },
        error: function (error) {
            console.log("Error: " + error);
        }
    });
}

function addZero(i) {
    return i < 10 ? "0" + i : i + "";
}

function countDown() {
    var nowtime = new Date();
    console.log(parseInt(nowtime.getTime() / 1000));

    // var endtime = new Date("2020/08/04 17:57:00");
    // var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    var lefttime = parseInt(active_time - parseInt(nowtime.getTime() / 1000));

    var d = parseInt(lefttime / (24 * 60 * 60));
    var h = parseInt(lefttime / (60 * 60) % 24);
    var m = parseInt(lefttime / 60 % 60);
    var s = parseInt(lefttime % 60);

    d = addZero(d)
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    var h_arr = h.split('');
    $("#t1").html(h_arr[0]);
    $("#t2").html(h_arr[1]);
    var m_arr = m.split('');
    $("#t3").html(m_arr[0]);
    $("#t4").html(m_arr[1]);
    var s_arr = s.split('');
    $("#t5").html(s_arr[0]);
    if (s_arr[1] == "-") {
        $("#t6").html(0);
    } else {
        $("#t6").html(s_arr[1]);
    }
    console.log("s_arr",s_arr);
    console.log("t5",s_arr[0]);
    console.log("t6",s_arr[1]);
    // document.querySelector(".count").innerHTML = `活动倒计时  ${d}天 ${h} 时 ${m} 分 ${s} 秒`;

    if (lefttime <= 0) {
        console.log(`活动开始`)
        // document.querySelector(".count").innerHTML = "活动已结束";
        if (active_time_fun != null) {
            clearInterval(active_time_fun);
            active_time_fun = null;
            getActiveTime();
        }

    } else {
        console.log(`活动倒计时 ${d} 天 ${h} 时 ${m} 分 ${s} 秒`)
    }
}