Ext.require('Ext.data.*');
Ext.require(['Ext.layout.container.Fit', 'Ext.window.MessageBox']);

$(document).ready(function(){
	$.getJSON("/lihelper/web/getvminfo.action?client_id=2&cookie_id=71FEEA2314A2DE55E38A45E82AFF0CF6",function(data){
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
});
  $("a#cpuAlarmSave").click(function(e){
    $.ajax({
		type:'post',
		url:'/lihelper/web/monitoralarm.action',
		data:$('form#formCpuAlarm').serialize(),
		success:function(result){
			 alert(result);
		}
	});
  });
  
   $("a#memAlarmSave").click(function(e){
    $.ajax({
		type:'post',
		url:'/lihelper/web/monitoralarm.action',
		data:$('form#formMemAlarm').serialize(),
		success:function(result){
			 alert(result);
		}
	});
  });

   $("a#ioAlarmSave").click(function(e){
    $.ajax({
		type:'post',
		url:'/lihelper/web/monitoralarm.action',
		data:$('form#formIoAlarm').serialize(),
		success:function(result){
			 alert(result);
		}
	});
  });
  
Ext.onReady(function() {
	var cpuLoadStore = Ext.create('Ext.data.Store',{fields: [{name: 'cpu',type:'float'},{name: 'time'}]});
	var memStore = Ext.create('Ext.data.Store',{fields: [{name: 'name'},{name: 'memory',type:'float'}]});	
	
	var cpuArray = [];
	var memArray = [];

	function asynCall(){
		$.getJSON("/lihelper/web/getmonitorinfo.action?client_id=2",function(data){
			obj = {
				cpu: data.data.usage_cpu,
				time:data.data.timestamp,
				free_mem:data.data.mem.free_mem,
				active_mem:data.data.mem.total_mem - data.data.mem.free_mem							
			};
			generateCpuLoad(obj);
			generateMem(obj);		
		});		
	}
	
    function generateCpuLoad(obj) {
		if (cpuArray.length < 8) {	
			for(var i=0;i<8;i++){
				cpuArray.push({
					cpu: 0,
					time:0
				});		
			};
			cpuLoadStore.loadData(cpuArray);
		}else{
			
			cpuLoadStore.data.removeAt(0);		
			cpuLoadStore.loadData([{
				cpu: obj.cpu,
				time:obj.time
			}], true);		
		}
	}
	
    function generateMem(obj) {		
				
		memArray.push({
			name:'free',
			memory:obj.free_mem
			});
		
		memArray.push({
			name:'active',
			memory:obj.active_mem
			});					
		memStore.loadData(memArray);
		memArray=[];
	}
			
  
	var task = {   
       run:function(){ 		
           asynCall()
       },
       interval:1000
    }	
	asynCall();
    	
    Ext.TaskManager.start(task);
    
        
    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.get("dynamicCpu"),
        width: 500,
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
    	
     
	Ext.create('Ext.chart.Chart', {
		renderTo: Ext.get("dynamicMem"),
		width: 500,
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
});
