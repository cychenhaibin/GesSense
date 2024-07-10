var switchForm = {
    switchValue1:1,
    switchValue2:0,
}
//根据元素Id和switch开关值初始化组件
function initSwitch(switchId,onOrOffValue){
    var e = document.getElementById(switchId)
    var switchOn = e.children[1]
    var switchOff = e.children[3]
    if(onOrOffValue == 0){
        switchOff.className += " is-active"
        e.className += " is-checked"
        if(switchOn.className.indexOf('is-active')!=-1){
            var classNameLen = switchOn.className.length
            switchOn.className = switchOn.className.substring(0,classNameLen-10)
        }
        e.setAttribute('value',0)
    }else{
        switchOn.className += " is-active"
        if(switchOff.className.indexOf('is-active')!=-1){
            var classNameLen = switchOff.className.length
            switchOff.className = switchOff.className.substring(0,classNameLen-10)
        }
        if(e.className.indexOf('is-checked')!=-1){
            var classNameLen = e.className.length
            e.className = e.className.substring(0,classNameLen-11)
        }
        e.setAttribute('value',1)
    }
}

//初始化第一个switch开关
initSwitch("switch-body1",switchForm.switchValue1)
//初始化第二个switch开关
initSwitch("switch-body2",switchForm.switchValue2)
//初始化第三个switch开关
initSwitch("switch-body3",switchForm.switchValue3)
//初始化第四个switch开关
initSwitch("switch-body4",switchForm.switchValue4)
//初始化第五个switch开关
initSwitch("switch-body5",switchForm.switchValue5)
//初始化第六个switch开关
initSwitch("switch-body6",switchForm.switchValue6)
//初始化第七个switch开关
initSwitch("switch-body7",switchForm.switchValue7)
//初始化第八个switch开关
initSwitch("switch-body8",switchForm.switchValue8)
//初始化第九个switch开关
initSwitch("switch-body9",switchForm.switchValue9)
//初始化第十个switch开关
initSwitch("switch-body10",switchForm.switchValue10)
//初始化第十一个switch开关
initSwitch("switch-body11",switchForm.switchValue11)
//初始化第十二个switch开关
initSwitch("switch-body12",switchForm.switchValue12)
//初始化第十三个switch开关
initSwitch("switch-body13",switchForm.switchValue13)

//第一个switch开关绑定鼠标点击事件
document.getElementById("switch-body1").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue1 = document.getElementById('switch-body1').getAttribute('value')
    console.log(switchForm.switchValue1)
}

//第二个switch开关绑定鼠标点击事件
document.getElementById("switch-body2").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue2 = document.getElementById('switch-body2').getAttribute('value')
    console.log(switchForm.switchValue2)
}

//第三个switch开关绑定鼠标点击事件
document.getElementById("switch-body3").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue3 = document.getElementById('switch-body3').getAttribute('value')
    console.log(switchForm.switchValue3)
}

//第四个switch开关绑定鼠标点击事件
document.getElementById("switch-body4").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue4 = document.getElementById('switch-body4').getAttribute('value')
    console.log(switchForm.switchValue4)
}

//第五个switch开关绑定鼠标点击事件
document.getElementById("switch-body5").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue5 = document.getElementById('switch-body5').getAttribute('value')
    console.log(switchForm.switchValue5)
}

//第六个switch开关绑定鼠标点击事件
document.getElementById("switch-body6").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue6 = document.getElementById('switch-body6').getAttribute('value')
    console.log(switchForm.switchValue6)
}

//第七个switch开关绑定鼠标点击事件
document.getElementById("switch-body7").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue7 = document.getElementById('switch-body7').getAttribute('value')
    console.log(switchForm.switchValue7)
}
//第八个switch开关绑定鼠标点击事件
document.getElementById("switch-body8").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue8 = document.getElementById('switch-body8').getAttribute('value')
    console.log(switchForm.switchValue8)
}
//第九个switch开关绑定鼠标点击事件
document.getElementById("switch-body9").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue9 = document.getElementById('switch-body9').getAttribute('value')
    console.log(switchForm.switchValue9)
}
//第十个switch开关绑定鼠标点击事件
document.getElementById("switch-body10").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue10 = document.getElementById('switch-body10').getAttribute('value')
    console.log(switchForm.switchValue10)
}
//第十一个switch开关绑定鼠标点击事件
document.getElementById("switch-body11").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue11 = document.getElementById('switch-body11').getAttribute('value')
    console.log(switchForm.switchValue11)
}
//第十二个switch开关绑定鼠标点击事件
document.getElementById("switch-body12").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue12 = document.getElementById('switch-body12').getAttribute('value')
    console.log(switchForm.switchValue12)
}
//第十三个switch开关绑定鼠标点击事件
document.getElementById("switch-body13").onclick=function(e){
    switchClick(e.currentTarget.children[2])
    switchForm.switchValue13 = document.getElementById('switch-body13').getAttribute('value')
    console.log(switchForm.switchValue13)
}

function switchClick(e){
    var switchOn = e.parentNode.children[1]
    var switchOff = e.parentNode.children[3]
    if(switchOn.className.indexOf('is-active')!=-1){
        var classNameLen = switchOn.className.length
        switchOn.className = switchOn.className.substring(0,classNameLen-10)
        switchOff.className += " is-active"
        e.parentNode.className += " is-checked"
        e.parentNode.setAttribute('value',0)
    }else{
        var switchOffClassNameLen = switchOff.className.length
        var switchClassNameLen = e.parentNode.className.length
        switchOn.className += " is-active"
        switchOff.className = switchOff.className.substring(0,switchOffClassNameLen-10)
        e.parentNode.className = e.parentNode.className.substring(0,switchClassNameLen-11)
        e.parentNode.setAttribute('value',1)
    }
}