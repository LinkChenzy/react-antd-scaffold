import React 										from 'react';
import { HashRouter, Route, Switch, Redirect } 	from 'react-router-dom';
import routes 										from './routes/config';


class App extends React.Component {
	/**
   * 根据路由表生成路由组件11
   * @param {Array} routes - 路由配置表
   * @param {String} contextPath - 父级路径。比如后台 admin...
   */
	renderRoutes(routes, contextPath) {
		const children = []
		const renderRoute = (item, routeContextPath) => {
			let newContextPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath
			newContextPath = newContextPath.replace(/\/+/g, '/')

			// auth handler
			if ((item.protected || newContextPath.includes('admin')) && this.props.auth !== 1) {
				item = {
					...item,
					component: () => <Redirect to="/login" />,
					children: []
				}
			}

			if (item.component && item.childRoutes) {
				const childRoutes = this.renderRoutes(item.childRoutes, newContextPath)
				children.push(
					<Route
					key={newContextPath}
					render={props => <item.component {...props}>{childRoutes}</item.component>}
					path={newContextPath}
					/>
				)
			} else if (item.component) {
				children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />)
			} else if (item.childRoutes) {
				item.childRoutes.forEach(r => renderRoute(r, newContextPath))
			}
		}
		// console.log('routes :', routes);
		routes.forEach(item => renderRoute(item, contextPath))

		return <Switch>{children}</Switch>
	}
	render() {
		const children = this.renderRoutes(routes, '/')
		return (
			<HashRouter>{children}</HashRouter>
		);
	}
}

export default App;
