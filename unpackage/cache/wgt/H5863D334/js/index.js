const switchForm = {
	switchValue1: 0,
	switchValue2: 1,
}
//根据元素Id和switch开关值初始化组件
function initSwitch(switchId, onOrOffValue) {
	var e = document.getElementById(switchId)
	var switchOn = e.children[1]
	var switchOff = e.children[3]
	if (onOrOffValue == 1) {
		switchOff.className += " is-active"
		e.className += " is-checked"
		if (switchOn.className.indexOf('is-active') != -1) {
			var classNameLen = switchOn.className.length
			switchOn.className = switchOn.className.substring(0, classNameLen - 10)
		}
		e.setAttribute('value', 1)
	} else {
		switchOn.className += " is-active"
		if (switchOff.className.indexOf('is-active') != -1) {
			var classNameLen = switchOff.className.length
			switchOff.className = switchOff.className.substring(0, classNameLen - 10)
		}
		if (e.className.indexOf('is-checked') != -1) {
			var classNameLen = e.className.length
			e.className = e.className.substring(0, classNameLen - 11)
		}
		e.setAttribute('value', 0)
	}
}

//初始化第一个switch开关
initSwitch("switch-body1", switchForm.switchValue1)
//初始化第二个switch开关
initSwitch("switch-body2", switchForm.switchValue1)
//初始化第三个switch开关
initSwitch("switch-body3", switchForm.switchValue1)
//初始化第四个switch开关
initSwitch("switch-body4", switchForm.switchValue1)
//初始化第五个switch开关
initSwitch("switch-body5", switchForm.switchValue1)
//初始化第六个switch开关
initSwitch("switch-body6", switchForm.switchValue1)
//初始化第七个switch开关
initSwitch("switch-body7", switchForm.switchValue1)
//初始化第八个switch开关
initSwitch("switch-body8", switchForm.switchValue1)
//初始化第九个switch开关
initSwitch("switch-body9", switchForm.switchValue1)
//初始化第十个switch开关
initSwitch("switch-body10", switchForm.switchValue1)
//初始化第十一个switch开关
initSwitch("switch-body11", switchForm.switchValue1)
//初始化第十二个switch开关
initSwitch("switch-body12", switchForm.switchValue1)
//初始化第十三个switch开关
initSwitch("switch-body13", switchForm.switchValue1)

//第一个switch开关绑定鼠标点击事件
document.getElementById("switch-body1").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body1').getAttribute('value')
	console.log(switchForm.switchValue1)
}

//第二个switch开关绑定鼠标点击事件
document.getElementById("switch-body2").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body2').getAttribute('value')
	console.log(switchForm.switchValue1)
}

//第三个switch开关绑定鼠标点击事件
document.getElementById("switch-body3").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body3').getAttribute('value')
	console.log(switchForm.switchValue1)
}

//第四个switch开关绑定鼠标点击事件
document.getElementById("switch-body4").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body4').getAttribute('value')
	console.log(switchForm.switchValue1)
}

//第五个switch开关绑定鼠标点击事件
document.getElementById("switch-body5").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body5').getAttribute('value')
	console.log(switchForm.switchValue1)
}

//第六个switch开关绑定鼠标点击事件
document.getElementById("switch-body6").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body6').getAttribute('value')
	console.log(switchForm.switchValue1)
}

//第七个switch开关绑定鼠标点击事件
document.getElementById("switch-body7").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body7').getAttribute('value')
	console.log(switchForm.switchValue1)
}
//第八个switch开关绑定鼠标点击事件
document.getElementById("switch-body8").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body8').getAttribute('value')
	console.log(switchForm.switchValue1)
}
//第九个switch开关绑定鼠标点击事件
document.getElementById("switch-body9").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body9').getAttribute('value')
	console.log(switchForm.switchValue1)
}
//第十个switch开关绑定鼠标点击事件
document.getElementById("switch-body10").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body10').getAttribute('value')
	console.log(switchForm.switchValue1)
}
//第十一个switch开关绑定鼠标点击事件
document.getElementById("switch-body11").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body11').getAttribute('value')
	console.log(switchForm.switchValue1)
}
//第十二个switch开关绑定鼠标点击事件
document.getElementById("switch-body12").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body12').getAttribute('value')
	console.log(switchForm.switchValue1)
}
//第十三个switch开关绑定鼠标点击事件
document.getElementById("switch-body13").onclick = function(e) {
	switchClick(e.currentTarget.children[2])
	switchForm.switchValue1 = document.getElementById('switch-body13').getAttribute('value')
	console.log(switchForm.switchValue1)
}

function switchClick(e) {
	var switchOn = e.parentNode.children[1]
	var switchOff = e.parentNode.children[3]
	if (switchOn.className.indexOf('is-active') != -1) {
		var classNameLen = switchOn.className.length
		switchOn.className = switchOn.className.substring(0, classNameLen - 10)
		switchOff.className += " is-active"
		e.parentNode.className += " is-checked"
		e.parentNode.setAttribute('value', 1)
	} else {
		var switchOffClassNameLen = switchOff.className.length
		var switchClassNameLen = e.parentNode.className.length
		switchOn.className += " is-active"
		switchOff.className = switchOff.className.substring(0, switchOffClassNameLen - 10)
		e.parentNode.className = e.parentNode.className.substring(0, switchClassNameLen - 11)
		e.parentNode.setAttribute('value', 0)
	}
}
