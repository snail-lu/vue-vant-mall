import {
	Button,
	Row,
	Col,
	Grid,
	GridItem,
	Image,
	Search,
	Swipe,
	SwipeItem,
	Card,
	Tag,
	List,
	TreeSelect,
	SubmitBar,
	Checkbox,
	Cell,
	Lazyload,
	NavBar,
	Icon,
	Dialog,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	Tab,
	Tabs,
	Sku,
	Toast
} from 'vant'

let vantUIs = [
	Button,
	Row,
	Col,
	Grid,
	GridItem,
	Image,
	Search,
	Swipe,
	SwipeItem,
	Card,
	Tag,
	List,
	TreeSelect,
	SubmitBar,
	Checkbox,
	Cell,
	Lazyload,
	NavBar,
	Icon,
	Dialog,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	Tab,
	Tabs,
	Sku,
	Toast
]

export default {
	install(Vue) {
		vantUIs.forEach((vantUI) => {
			Vue.use(vantUI)
		})
	}
}
