{
	"code":200, //200是成功，其他都是失败
	"message":"xxxx",
	"data": //数据节点
	{
	  "cpu":2, //CPU个数
	  "mem":2048, //内存大小，单位MB
	  "disk":50, //磁盘大小，单位GB
	  "uptime":"1111", //系统运行时间
	  "kernel":"xxx", //kernel版本
	  "os_type":"x86", //系统类型
	  "release":"xxx", //发行版本
	  "network":[
		{
			"nio":"eth0", //网卡名称
			"ip":"127.0.0.1" //ip地址，是否需要mac/subnet_mask呢？
		},
		{
			"nio":"eth0",
			"ip":"42.125.126.1"
		}
		]  
	} 
}
