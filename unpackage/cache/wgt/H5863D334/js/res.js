
function feachData() {
	mui.ajax('http://74.48.160.188:8888/api/v1/equipments', {
		type: 'get', // 假设API需要POST请求
		dataType: 'json', // 假设API返回的数据格式是JSON
		headers: {
			'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4NTE3NDEzMTA0NTU4MDgsInVzZXJuYW1lIjoicm9zeXJhaW4iLCJpc3MiOiJ3b2FuanUiLCJleHAiOjE3NDY1NDA5MDd9.cYpAHVJ1BATfLWifLeUd-3yWXWL6XZFcGficHpQM7Ac'
		},
		success: function(response) {
			// 打印整个响应对象以进行调试
			console.log('服务器响应：', response.data);

			// 检查响应状态码
			if (response.code === 1000 && response.msg === 'success') {
				// 检查response对象中是否包含data属性，并且data不是一个undefined
				if (response.data.status === 0 && response.data.equipment_name == '窗户') {
					initSwitch("switch-body3", 0)
				} else {
					initSwitch("switch-body3", 1)
				}
			} else {
				console.error('接口返回错误：', response.msg);
				
			}
		},
		error: function(xhr, type, error) {
			var errorText = xhr.responseText;
			// 打印错误信息
			console.error('请求失败：', errorText);
			// 可以在这里提供用户反馈或执行其他错误处理逻辑
		}
	});