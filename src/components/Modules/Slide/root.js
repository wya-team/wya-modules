
import Viewer from './Viewer';
import Editor from './Editor';
const listItem = {
	"img": "http://oss.ruishan666.com/image/testzy/171016/124168708267/6.jpg",
	"url": "",
	"title": "链接"
};
export const Slide = {
	type: '基础组件',
	name: "图片广告",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"style": 1,
		"list": [
			listItem
		]
	},
	listItem,
	dataValidity: (res = {}) => {
		for (let i = 0; i < res.list.length; i++) {
			let item = res.list[i] || {};
			if (!item.img) {
				return {
					error: "图片广告模块 - 图片必填"
				};
			}
			// if (!item.url) {
			// 	return {
			// 		error: "图片广告模块 - 链接地址必填"
			// 	};
			// }
		}
		return null;
	}
};