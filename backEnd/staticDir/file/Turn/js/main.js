/**
 * Created by ChengYa on 2016/6/18.
 */

//判断手机类型
window.onload = function () {
    //alert($(window).height());
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        //屏蔽ios下上下弹性
        $(window).on('scroll.elasticity', function (e) {
            e.preventDefault();
        }).on('touchmove.elasticity', function (e) {
            e.preventDefault();
        });
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
    }
    //预加载
    loading();
}

var date_start;
var date_end;
date_start = getNowFormatDate();
//加载图片
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串   
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

let link = window.location.href;
let params = this.GetRequest();  // 地址解析
let urls = params.url.split(',')

var loading_img_url = urls
console.log(loading_img_url)
// var loading_img_url = [
//     "./image/0001.jpg",
//     "./image/0002.jpg",
//     "./image/0003.jpg",
//     "./image/0004.jpg",
//     "./image/0005.jpg",
//     "./image/0006.jpg",
//     "./image/0007.jpg",
//     "./image/0008.jpg",
//     "./image/0009.jpg",
//     "./image/0010.jpg",
//     "./image/0011.jpg",
//     "./image/0012.jpg",
//     "./image/0013.jpg",
//     "./image/0014.jpg",
//     "./image/0015.jpg",
//     "./image/0016.jpg",
//     "./image/0017.jpg",
//     "./image/0018.jpg",
//     "./image/0019.jpg",
//     "./image/0020.jpg",
//     "./image/0021.jpg",
//     "./image/0022.jpg",
//     "./image/0023.jpg",
//     "./image/0024.jpg",
//     "./image/0025.jpg",
//     "./image/0026.jpg",
//     "./image/0027.jpg",
//     "./image/0028.jpg",
//     "./image/0029.jpg",
//     "./image/0030.jpg",
//     "./image/0031.jpg",
//     "./image/0032.jpg",
//     "./image/0033.jpg",
//     "./image/0034.jpg",
//     "./image/0035.jpg",
//     "./image/0036.jpg",
//     "./image/0037.jpg",
//     "./image/0038.jpg",
//     "./image/0039.jpg",
//     "./image/0040.jpg",
//     "./image/0041.jpg",
// ];

//加载页面
function loading() {
    var numbers = 0;
    var length = loading_img_url.length;

    for (var i = 0; i < length; i++) {
        var img = new Image();
        img.src = loading_img_url[i];
        img.onerror = function () {
            numbers += (1 / length) * 100;
        }
        img.onload = function () {
            numbers += (1 / length) * 100;
            $('.number').html(parseInt(numbers) + "%");
            console.log(numbers);
            if (Math.round(numbers) == 100) {
                //$('.number').hide();
                date_end = getNowFormatDate();
                var loading_time = date_end - date_start;
                //预加载图片
                $(function progressbar() {
                    //拼接图片
                    $('.shade').hide();
                    var tagHtml = "";
                    for (var i = 0; i <= loading_img_url.length - 1; i++) {
                        if (i == 0) {
                            // tagHtml += ' <div id="first" style="background:url("' + loading_img_url[i] + '");background-size:100%;background-repeat: no-repeat;background-position-x: 0%!important;background-position-y: 0%;"></div>';
                            tagHtml += ' <div style="background:url(' + loading_img_url[i] + ');background-size:100%;background-repeat: no-repeat;background-position-x: 0%;background-position-y: 0%;"></div>';
                        } else if (i == loading_img_url.length - 1) {
                            tagHtml += ' <div id="end" style="background:url(' + loading_img_url[i] + ');background-size:100%;background-repeat: no-repeat;background-position-x: 0%;background-position-y: 0%;"></div>';
                        } else {
                            tagHtml += ' <div style="background:url(' + loading_img_url[i] + ');background-size:100%;background-repeat: no-repeat;background-position-x: 0%;background-position-y: 0%;"></div>';
                        }
                    }
                    $(".flipbook").append(tagHtml);
                    var w = $(".graph").width();
                    $(".flipbook-viewport").show();
                });
                //配置turn.js
                function loadApp() {
                    var w = $(window).width();
                    var h = $(window).height();
                    $('.flipboox').width(w).height(h);
                    $(window).resize(function () {
                        w = $(window).width();
                        h = $(window).height();
                        $('.flipboox').width(w).height(h);
                    });
                    $('.flipbook').turn({
                        // Width
                        width: w,
                        // Height
                        height: h,
                        // Elevation
                        elevation: 50,
                        display: 'single',
                        // Enable gradients
                        gradients: true,
                        // Auto center this flipbook
                        autoCenter: true,
                        when: {
                            turning: function (e, page, view) {
                                if (page == 1) {
                                    $(".btnImg").css("display", "none");
                                    $(".mark").css("display", "block");
                                } else {
                                    $(".btnImg").css("display", "block");
                                    $(".mark").css("display", "none");
                                }
                                if (page == 41) {
                                    $(".nextPage").css("display", "none");
                                } else {
                                    $(".nextPage").css("display", "block");
                                }
                            },
                            turned: function (e, page, view) {
                                console.log(page);
                                var total = $(".flipbook").turn("pages");//总页数
                                $(`.p${page-1}`).css('background-size','100%')

                                if (page == 1) {
                                    $(".return").css("display", "none");
                                    $(".btnImg").css("display", "none");
                                } else {
                                    $(".return").css("display", "block");
                                    $(".btnImg").css("display", "block");
                                }
                                if (page == 2) {
                                    $(".catalog").css("display", "block");
                                } else {
                                    $(".catalog").css("display", "none");
                                }
                            }
                        }
                    })
                }
                yepnope({
                    test: Modernizr.csstransforms,
                    yep: ['js/turn.js'],
                    complete: loadApp
                });
            }
            ;
        }
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "";
    var seperator2 = "";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + "" + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}


