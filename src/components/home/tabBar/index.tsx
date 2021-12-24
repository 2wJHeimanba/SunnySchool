import React, { FC, ReactElement } from 'react'
import { Button, NavBar, TabBar } from 'antd-mobile'
import {
//   Route,
//   Routes,
//   useHistory,
  useLocation,
  useNavigate
//   MemoryRouter as Router,
//   Navigate
} from 'react-router-dom'
// import { useHistory } from "react-router"
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import './tabBar.css'

const Bottom: FC = (props:any):ReactElement => {
//   const history = useHistory()
  let navigate = useNavigate();
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
      console.log(value)
    // Navigate("/invoices");
    navigate(value)
  }

  const tabs = [
    {
      key: '/',
      title: '任务广场',
      icon: <AppOutline />,
    },
    {
      key: '/mytask',
      title: '我的任务',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/about',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)} className="tabbar-box">
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} className="tabbar-font" />
      ))}
    </TabBar>
  )
}

export default Bottom

// function TaskTabBar(){
//   return (
//       <div className="app">
//         {/* <div className="top">
//           <NavBar>配合路由使用</NavBar>
//         </div> */}
//         <div className="body">
//           <Routes>
//             <Route path='/home'>
//               <Home />
//             </Route>
//             <Route path='/todo'>
//               <Todo />
//             </Route>
//             <Route path='/message'>
//               <Message />
//             </Route>
//             <Route path='/me'>
//               <PersonalCenter />
//             </Route>
//           </Routes>
//         </div>
//         <div className="bottom">
//           <Bottom />
//         </div>
//       </div>
//   )
// }

// export default TaskTabBar

// function Home() {
//   return <div>首页</div>
// }

// function Todo() {
//   return <div>我的代办</div>
// }

// function Message() {
//   return <div>我的消息</div>
// }

// function PersonalCenter() {
//   return <div>个人中心</div>
// }