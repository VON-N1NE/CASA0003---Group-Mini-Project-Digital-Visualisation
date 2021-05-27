new Vue({
	el: '#app',
	data: function() {
		return {
			visible: false,
			selectOptions: [],
			selectValue: ''
		}
	},
	created() {
		for (var i = 0; i <= 8; i++) {
			this.selectOptions.push({
				value: i,
				label: (2010 + i)
			});
		}
	},
	methods: {
		selectChange: function() {
			myChart.dispatchAction({
				type: 'timelineChange',
				currentIndex: this.selectValue
			})
		}
	}
});
var myChart = echarts.init(document.getElementById('world'));
var areaName = 'Hartlepool and Stockton-on-Tees';
var GDHI_years = ['GDHI_2010', 'GDHI_2011', 'GDHI_2012', 'GDHI_2013', 'GDHI_2014', 'GDHI_2015', 'GDHI_2016', 'GDHI_2017',
	'GDHI_2018'
]

var linechart_years_1 = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
var linechart_years_2 = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
var ydata = []
var option = {
	baseOption: {  
		timeline: {
			axisType: 'category',
			autoPlay: false,
			playInterval: 2000,
			symbolSize: 12,
			left: '5%',
			right: '5%',
			bottom: '0%',
			width: '90%',
			data: GDHI_years,
			tooltip: {
				formatter: GDHI_years
			},
			show: false
		},
		title: {
			text: 'England',
			left: '45%',
			top: '3%',
			textStyle: {
				color: '#FFFFFF',
				fontSize: 30
			}
		},
		tooltip: {
			show: true
		},
		grid: {
			right: '5%',
			left: '5%',
			top: '5%',
			bottom: '5%',
		},
		visualMap: {
			right: '5%',
			bottom: '10%',
			min: 0,
			max: 31000,
			color: ['#DC419A', '#DF548A', '#E2657C', '#E77C68', '#EA9353', '#EEA841', '#F3BE2E', '#F7D11E',
				'#FCEC06', '#FBED05'
			],
			text: ['29516 £m', '1395 £m'],
			textStyle: {
				color: '#FFFFFF'
			}
		},
		xAxis: {
			min: 0,
			max: 31000,
			show: false
		},
		yAxis: {
			show: false
		},
		geo: {
			map: 'England_map',
			roam: true,
			zoom: 0.8,
			right: '5%',
			left: '5%',
			itemStyle: {
				borderColor: '#FFFFFF',
				borderWidth: 2
			},
			aspectScale: 0.7
		},
		series: [{
			name: 'mapSer',
			type: 'map',
			map: 'china',
			roam: true,
			zoom: 0.6,
			geoIndex: 0,
			label: {
				show: true,
				color: '#ffffff',
				emphasis: {
					color: 'white',
					show: false
				}
			},
			itemStyle: {
				show: true,
				normal: {
					borderColor: '#FFFFFF',
					borderWidth: 1,
					areaColor: '#12235c'
				},
				emphasis: {
					areaColor: '#FA8C16',
					borderWidth: 0,
					color: 'green'
				}
			},
		}]
	},
	options: []
}


var lineChart = echarts.init(document.getElementById('line'));
let lineoption = {
	title: {
		text: 'GDHI for ' + areaName
	},
	grid: {
		left: '45',
		width: 'zoom',
		top: '20%'
	},
	xAxis: {
		type: 'category'
	},
	yAxis: {
		type: 'value'
	},
	legend: {
		top: '10%',
		data: ['GDHI']
	},
	series: []
};


function GDHI() {
	let tempData = [];
	for (let i = 0; i < EnglandData.length; i++) {
		if (EnglandData[i]['nuts318nm'] === areaName) {
			tempData.push(EnglandData[i]['GDHI_2010'])
			tempData.push(EnglandData[i]['GDHI_2011'])
			tempData.push(EnglandData[i]['GDHI_2012'])
			tempData.push(EnglandData[i]['GDHI_2013'])
			tempData.push(EnglandData[i]['GDHI_2014'])
			tempData.push(EnglandData[i]['GDHI_2015'])
			tempData.push(EnglandData[i]['GDHI_2016'])
			tempData.push(EnglandData[i]['GDHI_2017'])
			tempData.push(EnglandData[i]['GDHI_2018'])
		}
	}
	lineoption.xAxis.data = linechart_years_1;
	lineoption.title.text = 'GDHI for ' + areaName;
	lineoption.legend.data = ['GDHI'];
	lineoption.series = [{
		data: tempData,
		name: 'GDHI',
		type: 'line'
	}];
	lineChart.clear();
	lineChart.setOption(lineoption);
};

function Growth_rates() {
	let tempData = [];
	for (let i = 0; i < EnglandData.length; i++) {
		if (EnglandData[i]['nuts318nm'] === areaName) {
			tempData.push(EnglandData[i]['Growth_2011'])
			tempData.push(EnglandData[i]['Growth_2012'])
			tempData.push(EnglandData[i]['Growth_2013'])
			tempData.push(EnglandData[i]['Growth_2014'])
			tempData.push(EnglandData[i]['Growth_2015'])
			tempData.push(EnglandData[i]['Growth_2016'])
			tempData.push(EnglandData[i]['Growth_2017'])
			tempData.push(EnglandData[i]['Growth_2018'])
		}
	}
	let tempData2 = [];
	for (let i = 0; i < EnglandData.length; i++) {
		if (EnglandData[i]['nuts318nm'] === areaName) {
			tempData2.push(['2011', EnglandData[i]['Energy_2011']])
			tempData2.push(['2012', EnglandData[i]['Energy_2012']])
			tempData2.push(['2013', EnglandData[i]['Energy_2013']])
			tempData2.push(['2014', EnglandData[i]['Energy_2014']])
			tempData2.push(['2015', EnglandData[i]['Energy_2015']])
			tempData2.push(['2016', EnglandData[i]['Energy_2016']])
			tempData2.push(['2017', EnglandData[i]['Energy_2017']])
			tempData2.push(['2018', EnglandData[i]['Energy_2018']])
		}
	}
	lineoption.xAxis.data = linechart_years_2;
	lineoption.title.text = 'Comparing the growth rates';
	lineoption.series = [{
		data: tempData,
		name: 'GDHI',
		type: 'line'
	}, {
		data: tempData2,
		name: 'Energy consumption',
		type: 'line',
		lineStyle: {
			color: "#FF7070"
		},
		itemStyle: {
			color: "#FF7070"
		}
	}];
	lineoption.legend.data = ['GDHI', 'Energy consumption'];
	lineChart.clear();
	lineChart.setOption(lineoption);
};


let basedata = [];
for (let i = 0; i < GDHI_years.length; i++) {
	let basedata = [];
	for (let j = 0; j < EnglandData.length; j++) {
		let subdata = {
			name: EnglandData[j]['nuts318nm'],
			value: EnglandData[j][GDHI_years[i]],
		}
		basedata.push(subdata)
	}
	let params = {
		yAxis: {
			data: ydata,
		},
		series: [{
			name: GDHI_years[i],
			type: 'map',
			data: basedata
		}]
	}
	option.options.push(params);
}
myChart.setOption(option);

GDHI();

myChart.on('click', function(params) {
	if (params.componentType != "timeline") {
		areaName = params.name
		GDHI();
	}
});

window.addEventListener("resize", function() {
	myChart.resize();
});
