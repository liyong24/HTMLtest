/**
 * Created by liyong on 2017/3/20.
 */

$(".mine_menu a").click(function(){
    $(".mine_menu a").css({
        "color" : "#666666",
        "text-decoration" : "none"
    });
    $(this).css({
        "color" : "#ED7122",
        "text-decoration" : "underline"
    });
    $(".mine_box").hide();
    $(".mine_box").eq($(this).index()).show();
});


//我的账户等级
var accountNum = 9999;
//调用账户函数
accountV(accountNum);

//账户函数
var index = 0;
var pre = 0;
function accountV(accountNum){
    if(accountNum<=500){
        index = 1;
        pre = (accountNum / 500) * 100;
    }else if(accountNum<=2000){
        index = 2;
        pre = ((accountNum - 500)/(2000 - 500))*100;
    }else if(accountNum<=5000){
        index = 3;
        pre = ((accountNum - 2000)/(5000 - 2000))*100;
    }else if(accountNum<=20000){
        index = 4;
        pre = ((accountNum - 5000)/(20000 - 5000))*100;
    }else if(accountNum<=50000){
        index = 5;
        pre = ((accountNum - 20000)/(50000 - 20000))*100;
    }else if(accountNum<=100000){
        index = 6;
        pre = ((accountNum - 50000)/(100000 - 50000))*100;
    }else{
        index = 7;
        pre = 100;
    }
    for(var i = 0; i < 7; i++){
        if(i < index){
            $(".account_v").eq(i).css("background","#EC6A17");
            if(i-1 < 0){
                $(".account_p_pre").eq(i).css("width",pre+"%");
            }else{
                $(".account_p").eq(i-1).css("background","#EC6A17");
                $(".account_p_pre").eq(i).css("width",pre+"%");
            }
        }
    }
}

//我的积分添加数据
var integralNum = 4;
for(var i = 0; i < integralNum; i++){
    var integralTr = document.createElement("tr");
    var integralTd1 = document.createElement("td");
    var integralTd2 = document.createElement("td");
    var integralTd3 = document.createElement("td");
    integralTd1.innerText = "2017-03-22 11:20:10";
    integralTd2.innerText = "+80";
    integralTd3.innerText = "消费赠送";
    integralTr.appendChild(integralTd1);
    integralTr.appendChild(integralTd2);
    integralTr.appendChild(integralTd3);
    $(".integral_wrap table").append(integralTr);
}



//地址管理
//<tr>
//	<td>1</td>
//	<td>毛毛</td>
//	<td>北京 海淀区 健德门</td>
//	<td>环星大厦</td>
//	<td>3922120</td>
//	<td>学校的地址</td>
//	<td>
//		<a href="###">设为默认</a>
//		<a href="###">修改</a>
//		<a href="###">删除</a>
//	</td>
//</tr>

var mineAddNum = 8;
for(var i = 0; i < mineAddNum; i++){
    mineAddBox(i,"毛毛","北京 海淀区 健德门","环星大厦","010-110112119","公司的地址","###","###");
}
function mineAddBox(index,name,add,addmore,phone,type,yUrl,AUrl){
    var Tr = document.createElement("tr");
    var aTd = document.createElement("td");
    aTd.innerHTML = index;
    Tr.appendChild(aTd);

    var bTd = document.createElement("td");
    bTd.innerHTML = name;
    Tr.appendChild(bTd);

    var cTd = document.createElement("td");
    cTd.innerHTML = add;
    Tr.appendChild(cTd);

    var dTd = document.createElement("td");
    dTd.innerHTML = addmore;
    Tr.appendChild(dTd);

    var eTd = document.createElement("td");
    eTd.innerHTML = phone;
    Tr.appendChild(eTd);

    var fTd = document.createElement("td");
    fTd.innerHTML = type;
    Tr.appendChild(fTd);

    var gTd = document.createElement("td");
    var aA = document.createElement("a");
    aA.href = yUrl;
    aA.innerHTML = "设为默认";
    gTd.appendChild(aA);
    var bA = document.createElement("a");
    bA.href = AUrl;
    bA.innerHTML = "修改";
    gTd.appendChild(bA);
    var cA = document.createElement("a");
    cA.href = "###";
    cA.innerHTML = "删除";
    gTd.appendChild(cA);
    Tr.appendChild(gTd);

    $(".mine_add_wrap table").append(Tr);
}


//我的收藏
var mineStarNum = 8;
for(var i = 0; i < mineStarNum; i++){
    addBox_tj("one.html","../img/commodity1.png","自家礼包送亲人，送朋友的不二选择","11.8","20.0",".mine_star_wrap");
}
function addBox_tj(Aurl,ImgUrl,part,prize1,prize2,className){
    var Div = document.createElement("div");
    Div.setAttribute("class","commodity_box_one");
    var aA = document.createElement("a");
    aA.href = Aurl;
    var aImg = document.createElement("img");
    aImg.src = ImgUrl;
    aA.appendChild(aImg);
    Div.appendChild(aA);

    var aP = document.createElement("p");
    var bA = document.createElement("a");
    bA.href = Aurl;
    bA.innerHTML = part;
    aP.appendChild(bA);
    Div.appendChild(aP);

    var aDiv = document.createElement("div");
    aDiv.setAttribute("class","commodity_price");
    aDiv.innerHTML = "￥"+prize1;
    var aDel = document.createElement("del");
    aDel.innerHTML = "￥"+prize2;
    aDiv.appendChild(aDel);
    var cA = document.createElement("a");
    cA.innerHTML = "取消收藏";
    cA.href = "###";
    aDiv.appendChild(cA);
    Div.appendChild(aDiv);
    $(className).append(Div);
}


//最近浏览
var mineResNum = 2;
for(var i = 0; i < mineResNum; i++){
    addBox_zuijin("one.html","../img/commodity1.png","自家礼包送亲人，送朋友的不二选择","11.8","20.0",".mine_res_see");
}


function addBox_zuijin(Aurl,ImgUrl,part,prize1,prize2,className){
    var Div = document.createElement("div");
    Div.setAttribute("class","commodity_box_one");
    var aA = document.createElement("a");
    aA.href = Aurl;
    var aImg = document.createElement("img");
    aImg.src = ImgUrl;
    aA.appendChild(aImg);
    Div.appendChild(aA);

    var aP = document.createElement("p");
    var bA = document.createElement("a");
    bA.href = Aurl;
    bA.innerHTML = part;
    aP.appendChild(bA);
    Div.appendChild(aP);

    var aDiv = document.createElement("div");
    aDiv.setAttribute("class","commodity_price");
    aDiv.innerHTML = "￥"+prize1;
    var aDel = document.createElement("del");
    aDel.innerHTML = "￥"+prize2;
    aDiv.appendChild(aDel);
    Div.appendChild(aDiv);
    $(className).append(Div);
}



//我的消息
//<tr>
//	<td>您的货物已发货</td>
//	<td>2015-09-23 15:25:07</td>
//	<td>未查看</td>
//	<td>
//		<a href="###">查看</a>
//		<a href="###">移出</a>
//	</td>
//</tr>

var addMineMsgNum = 8;
for(var i = 0; i < addMineMsgNum; i++){
    addMineMsgBox("您的货物已发货","2017-02-22 15:25:07","未查看","###");
}
function addMineMsgBox(part,time,type,aUrl){
    var Tr = document.createElement("tr");
    var aTd = document.createElement("td");
    aTd.innerHTML = part;
    Tr.appendChild(aTd);

    var bTd = document.createElement("td");
    bTd.innerHTML = time;
    Tr.appendChild(bTd);

    var cTd = document.createElement("td");
    cTd.innerHTML = type;
    Tr.appendChild(cTd);

    var dTd = document.createElement("td");
    var aA = document.createElement("a");
    aA.href = aUrl;
    aA.innerHTML = "查看";
    dTd.appendChild(aA);
    var bA = document.createElement("a");
    bA.href = "###";
    bA.innerHTML = "删除";
    dTd.appendChild(bA);
    Tr.appendChild(dTd);

    $(".mine_msg table").append(Tr);
}
