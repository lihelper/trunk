Ext.require('Ext.data.*');
Ext.require(['Ext.layout.container.Fit', 'Ext.window.MessageBox']);

$(document).ready(function(){
	$.getJSON("/lihelper/web/getvminfo.do?client_id=2&cookie_id=71FEEA2314A2DE55E38A45E82AFF0CF6",function(data){
		$("#cpu").html(data.data.cpu);
		$("#mem").html(data.data.mem);
		$("#uptime").html(data.data.uptime);
		$("#kernel").html(data.data.kernel);
		$("#os_type").html(data.data.os_type);
		$("#release").html(data.data.release);
		$.each(data.data.disks,function(entryIndex,entry){  
			var html = 'mount:' + entry['mount'] + '|';  
			html += 'size:' + entry['size'] + '<br>';                    
			$('#disks').append(html);  
		});
		$.each(data.data.network,function(entryIndex,entry){  
			var html = 'nio:' + entry['nio'] + '|';  
			html += 'ip:' + entry['ip'] + '<br>';                    
			$('#network').append(html);  
		});		
	});

	machineRunningState();
	
	function machineRunningState(){	
		var cpuLoadStore = Ext.create('Ext.data.Store',{fields: [{name: 'cpu',type:'float'},{name: 'time'}]});
		var memStore = Ext.create('Ext.data.Store',{fields: [{name: 'name'},{name: 'memory',type:'float'}]});
		var cpuArray = [];
		var memArray = [];
		
		init();
		
		drawCpuRealtime();
		drawMemRealtime();
		
		function init(){
			for(var i = 0;i < 8;i++){
				cpuArray.push(
				{
					cpu: 0,
					time:0
				});		
			};
			cpuLoadStore.loadData(cpuArray);
				
			memArray.push(
			{
				name:'free',
				memory:100
			});
			
			memArray.push(
			{
				name:'active',
				memory:0
			});					
			memStore.loadData(memArray);
		}	

		function drawCpuRealtime(){
			Ext.create('Ext.chart.Chart', {
				renderTo: Ext.get("dynamicCpu"),
				width: 900,
				height: 300,
				store: cpuLoadStore,	 	    
				theme: 'Category1',
				animate: false,
				axes: [
				   {
			 
					type: 'Numeric',//配置坐标的类型。一般用到的是Numeric、Category
					position: 'left', //4种位置设置.left, bottom, right, top
					fields: ['cpu'],//可以配置多个字段，用来设置坐标显示的值。其实这个配置和series中的yFiled配置项是没有关系的
					label: {//可以配置文字的显示方式。默认显示字段的值。比如设置label旋转一定的度数
						  rotate: {
							  degrees: 360
						  }					
					},
					  labelTitle: {
						font: '15px Arial'
					},
					title: 'CPU Load',//配置坐标需要显示的title
					minimum: 0,//minimum：可以配置坐标的最小值。
					maximum:100,//当然会有对应的最大值maximum。
					majorTickSteps:4,//可以配合使用majorTickSteps(主刻度，配置总共有多少个刻度)，
							   //minorTickSteps(次刻度，在每个主可短中画次刻度。
							   //比如配置10，则数字没增加10，会话一个次刻度)
					grid: true
					//grid :{ // 设定网格颜色值
					//      odd: {
					//          opacity: 1,
					//          fill: '#ddd',
					//          stroke: '#bbb',
					//          'stroke-width': 1
					//      }
					//  }
				  },
				{
					type: 'Category',
					position: 'bottom',
					fields: ['time'],
					title: 'time'
				 }
				],
				series: [
					{
					title: 'Core 1 (3.4GHz)',	            
					fill: true,//填充颜色           
					type: 'line',//type：配置图表的类型，图表有很多类型。每个图表都有各自独特的配置项
					//highlight: { //设置鼠标移动到图表上面，是否高亮。
					//    size: 7,
					//    radius: 7
					//},
				   tips: {//设置鼠标移动到图表上时的提示信息
					  trackMouse: true,  
					  width: 140,  
					  height: 28,  
					  renderer: function(storeItem, item) {  
						this.setTitle('usage cpu:' + storeItem.get('cpu') + '%' );  
					  }},  
					  
					axis: 'left',
					xField: 'time',//设定x坐标绑定的字段。因为axes设定了坐标的值，所以这个字段绑定的值必须在axes的坐标值中
					yField: 'cpu',//设定y坐标绑定的字段
						   // markerConfig: { //设定点的形状,大小,颜色
						   //         type: 'circle',
						   //         radius: 3,
						   //         'fill': '#f00'
						   //     }
							lineWidth: 4,
					showMarkers: false,
							style: {
					  'stroke-width': 1
					  }
					}]
			});		
		}
		
		function drawMemRealtime(){
			Ext.create('Ext.chart.Chart', {
				renderTo: Ext.get("dynamicMem"),
				width: 900,
				height: 300,
				store: memStore,	 	    
				shadow: true,

				legend: {
					position: 'right',
					update: false
				},
				insetPadding: 40,
				theme: 'Base:gradients',
				series: [{
					donut: 30, //内圈大小        
					type: 'pie',//type：配置图表的类型，图表有很多类型。每个图表都有各自独特的配置项
					field: 'memory',
					showInLegend: true,//显示图例
				  tips: {//设置鼠标移动到图表上时的提示信息
					trackMouse: true,  
					width: 140,  
					height: 28,  
					renderer: function(storeItem, item) {  
							// calculate and display percentage on hover
							var total = 0;
							memStore.each(function(rec) {
								total += rec.get('memory');
							});
							this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('memory') / total * 100) + '%');
					}},  
					highlight: {
						segment: {
							margin: 20
						}
					},
					labelTitle: {
						font: '13px Arial'
					},
					label: {
						field: 'name',
						display: 'rotate',
						contrast: true,
						font: '12px Arial'
					}}]
			});		
		}
		
		var task = {   
		   run:function(){ 		
			   asynCall()
		   },interval:2000
		}	
		
		asynCall();
				
		Ext.TaskManager.start(task);
			
		function asynCall(){
			$.getJSON("/lihelper/web/getmonitorinfo.do?client_id=2",function(data){
				obj = {
					cpu: data.data.usage_cpu,
					time:data.data.timestamp,
					free_mem:data.data.mem.free_mem,
					active_mem:data.data.mem.total_mem - data.data.mem.free_mem							
				};
				loadCpu(obj);
				loadMem(obj);		
			});		
		}
			
		function loadCpu(obj) {
			cpuLoadStore.data.removeAt(0);		
			cpuLoadStore.loadData(
			[{
				cpu: obj.cpu,
				time:obj.time
			}], true);					
		}

		function loadMem(obj) {	
			memArray=[];		
			memArray.push(
			{
				name:'free',
				memory:obj.free_mem
			});
			
			memArray.push(
			{
				name:'active',
				memory:obj.active_mem
			});					
			memStore.loadData(memArray);			
		}
	}
});




 

$("a#cpuAlarmSave").click(function(e){
    $.ajax({
		type:'post',
		dataType:'json',
		url:'/lihelper/web/monitoralarm.do',
		data:$('form#formCpuAlarm').serialize(),
		success:function(result){
			if(result.code != 200){
				alert("failure");
			}else{
				alert("successful");
			}
		}
	});
});
  
$("a#memAlarmSave").click(function(e){
    $.ajax({
		type:'post',
		dataType:'json',
		url:'/lihelper/web/monitoralarm.do',
		data:$('form#formMemAlarm').serialize(),
		success:function(result){
			if(result.code != 200){
				alert("failure");
			}else{
				alert("successful");
			}
		}
	});
});
  
$("a#diskAlarmSave").click(function(e){
    $.ajax({
		type:'post',
		dataType:'json',
		url:'/lihelper/web/monitoralarm.do',
		data:$('form#formDiskAlarm').serialize(),
		success:function(result){
			if(result.code != 200){
				alert("failure");
			}else{
				alert("successful");
			}
		}
	});
 });
  
$("a#ioAlarmSave").click(function(e){
    $.ajax({
		type:'post',
		dataType:'json',
		url:'/lihelper/web/monitoralarm.do',
		data:$('form#formIoAlarm').serialize(),
		success:function(result){
			if(result.code != 200){
				alert("failure");
			}else{
				alert("successful");
			}
		}
	});
  });

$("a#networkAlarmSave").click(function(e){
    $.ajax({
		type:'post',
		dataType:'json',
		url:'/lihelper/web/monitoralarm.do',
		data:$('form#formNetworkAlarm').serialize(),
		success:function(result){
			if(result.code != 200){
				alert("failure");
			}else{
				alert("successful");
			}
		}
	});
});
  

//初始化变量
var cpuHistoryStore = Ext.create('Ext.data.Store',{fields: [{name: 'timestamp'},{name: 'usage_cpu'}]});
var memHistoryStore = Ext.create('Ext.data.Store',{fields: [{name: 'timestamp'},{name: 'usage_mem'}]});
var cpuArray=[];
var memArray=[];

drawCpuHistory();
drawMemHistory();

function initHistoryMonitorData(){
	for(var i = 0;i < 8;i++){
		cpuArray.push(
		{
			timestamp: 0,
			usage_cpu:0
		});		
	};
	cpuHistoryStore.loadData(cpuArray);
	
	for(var i = 0;i < 8;i++){
		memArray.push(
		{
			timestamp: 0,
			usage_mem:0
		});		
	};
	memHistoryStore.loadData(memArray);
}
function drawCpuHistory(){
   Ext.create('Ext.chart.Chart', {
        renderTo: Ext.get("divDrawCpuHistory"),
        width: 900,
        height: 350,
        store: cpuHistoryStore,	 	    
        theme: 'Category1',
        animate: false,
        axes: [
        {   
            type: 'Numeric',//配置坐标的类型。一般用到的是Numeric、Category
            position: 'left', //4种位置设置.left, bottom, right, top
            fields: ['usage_cpu'],//可以配置多个字段，用来设置坐标显示的值。其实这个配置和series中的yFiled配置项是没有关系的
            label: {//可以配置文字的显示方式。默认显示字段的值。比如设置label旋转一定的度数
                  rotate: {
                      degrees: 360
                  }            
            },
	        labelTitle: {
                font: '15px Arial'
            },
            title: 'CPU负载',//配置坐标需要显示的title
            minimum: 0,//minimum：可以配置坐标的最小值。
            maximum:100,//当然会有对应的最大值maximum。
            majorTickSteps:4,//可以配合使用majorTickSteps(主刻度，配置总共有多少个刻度)，
                       //minorTickSteps(次刻度，在每个主可短中画次刻度。
                       //比如配置10，则数字没增加10，会话一个次刻度)
            grid: true,
//			grid: {
//				odd: {
//					opacity: 1,
//					fill: '#ddd',
//					stroke: '#bbb',
//					'stroke-width': 1
//				}
//			}
        },
        {
            //type: 'Numeric',
            type: 'Time',
			position: 'bottom',
            fields: ['timestamp'],
            title: 'timestamp',
			dateFormat: 'Y/m/d,H:i'
         }
        ],
		
        series: [
        {
				title: 'Core 1 (3.4GHz)',	            
				//fill: true,//填充颜色           
				type: 'line',//type：配置图表的类型，图表有很多类型。每个图表都有各自独特的配置项
				highlight: { //设置鼠标移动到图表上面，是否高亮。
					size: 7,
					radius: 7
				},
			    tips: {//设置鼠标移动到图表上时的提示信息
				  trackMouse: true,  
				  width: 300,  
				  height: 28,  
				  renderer: function(storeItem, item) {  
					this.setTitle('时间:' + storeItem.get('timestamp') + ',cpu使用率:' + storeItem.get('usage_cpu') + '%' );  
				}},  
              
				axis:  ['left', 'bottom'],
				xField: 'timestamp',//设定x坐标绑定的字段。因为axes设定了坐标的值，所以这个字段绑定的值必须在axes的坐标值中
				yField: 'usage_cpu',//设定y坐标绑定的字段
				markerConfig: { //设定点的形状,大小,颜色
					type: 'circle',
					radius: 3,
					'fill': '#f00'
				},
				lineWidth: 4,
				showMarkers: false,
				style: {'stroke-width': 1}
		}]	
	});
}

function drawMemHistory(){
 Ext.create('Ext.chart.Chart', {
        renderTo: Ext.get("divDrawMemHistory"),
        width: 900,
        height: 350,
        store: memHistoryStore,	 	    
        theme: 'Category1',
        animate: false,
        axes: [
        {   
            type: 'Numeric',//配置坐标的类型。一般用到的是Numeric、Category
            position: 'left', //4种位置设置.left, bottom, right, top
            fields: ['usage_mem'],//可以配置多个字段，用来设置坐标显示的值。其实这个配置和series中的yFiled配置项是没有关系的
            label: {//可以配置文字的显示方式。默认显示字段的值。比如设置label旋转一定的度数
                  rotate: {
                      degrees: 360
                  }            
            },
	        labelTitle: {
                font: '15px Arial'
            },
            title: '内存使用情况',//配置坐标需要显示的title
            minimum: 0,//minimum：可以配置坐标的最小值。
            maximum:100,//当然会有对应的最大值maximum。
            majorTickSteps:4,//可以配合使用majorTickSteps(主刻度，配置总共有多少个刻度)，
                       //minorTickSteps(次刻度，在每个主可短中画次刻度。
                       //比如配置10，则数字没增加10，会话一个次刻度)
            grid: true,
//			grid: {
//				odd: {
//					opacity: 1,
//					fill: '#ddd',
//					stroke: '#bbb',
//					'stroke-width': 1
//				}
//			}
        },
        {
            //type: 'Numeric',
            type: 'Time',
			position: 'bottom',
            fields: ['timestamp'],
            title: 'timestamp',
			dateFormat: 'Y/m/d,H:i'
         }
        ],
		
        series: [
        {
				title: '内存使用情况',	            
				//fill: true,//填充颜色           
				type: 'line',//type：配置图表的类型，图表有很多类型。每个图表都有各自独特的配置项
				highlight: { //设置鼠标移动到图表上面，是否高亮。
					size: 7,
					radius: 7
				},
			    tips: {//设置鼠标移动到图表上时的提示信息
				  trackMouse: true,  
				  width: 300,  
				  height: 28,  
				  renderer: function(storeItem, item) {  
					this.setTitle('时间:' + storeItem.get('timestamp') + ',内存使用率:' + storeItem.get('usage_mem') + '%' );  
				}},  
              
				axis:  ['left', 'bottom'],
				xField: 'timestamp',//设定x坐标绑定的字段。因为axes设定了坐标的值，所以这个字段绑定的值必须在axes的坐标值中
				yField: 'usage_mem',//设定y坐标绑定的字段
				markerConfig: { //设定点的形状,大小,颜色
					type: 'circle',
					radius: 3,
					'fill': '#f00'
				},
				lineWidth: 4,
				showMarkers: false,
				style: {'stroke-width': 1}
		}]	
	});
}
//<a href>事件
$("a#aHistoryMonitorData").click(function(e){	
	initHistoryMonitorData();
 }); 
 
$("a#getMonitorInfosByCpu").click(function(e){
	cpuArray = [];  
    $.ajax({
		type:'post',
		dataType:'json',
		url:'/lihelper/getmonitorinfos.do',
		//url:"http://127.0.0.1:8080/demo-js/history.jsp",
		data:$('form#formGetMonitorInfosByCpu').serialize(),
		success:function(result){
			$.each(result.data,function(entryIndex,entry){ 
				var myDate = new Date(entry['timestamp']);
				cpuArray.push(
				{
					timestamp: myDate,
					usage_cpu: entry['usage_cpu']
				});					
			});
			cpuHistoryStore.loadData(cpuArray);
		}
	});
});
 
$("a#getMonitorInfosByMem").click(function(e){
	memArray = [];  
    $.ajax({
		type:'post',
		dataType:'json',
		url:'/lihelper/getmonitorinfos.do',
		data:$('form#formGetMonitorInfosByMem').serialize(),
		success:function(result){
			$.each(result.data,function(entryIndex,entry){ 
				var myDate = new Date(entry['timestamp']);
				memArray.push(
				{
					timestamp: myDate,
					usage_mem: entry['usage_mem']
				});					
			});
			memHistoryStore.loadData(memArray);
		}
	});
});  
