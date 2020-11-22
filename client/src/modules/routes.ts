import Home from "../pages/Home"
import About from "../pages/About"
import Booking from "../pages/Booking"
import Gallery from "../pages/Gallery"
import Profile from "../pages/Profile"
import Orders from "../pages/Orders"
import Responses from "../pages/Responses"
import {
  BsHouse,
  BsInfoSquare,
  BsImages,
  BsKanban,
  BsChatSquareQuote,
} from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"

export interface IRoute {
  component: React.FC
  path: string
  exact?: boolean
}

export interface ILink {
  to: string
  exact?: boolean
  Icon?: any
  title: string
  className: string
  activeClassName: string
}

export const getLinks = (userId: string, username: string): ILink[] => {
  return [
    {
      to: "/",
      exact: true,
      Icon: BsHouse,
      title: "Головна",
      className: "link",
      activeClassName: "link--active",
    },
    {
      to: "/about",
      Icon: BsInfoSquare,
      title: "Деталі",
      className: "link",
      activeClassName: "link--active",
    },
    {
      to: "/booking",
      Icon: BsKanban,
      title: "Бронювання",
      className: "link",
      activeClassName: "link--active",
    },
    {
      to: "/gallery",
      Icon: BsImages,
      title: "Галерея",
      className: "link",
      activeClassName: "link--active",
    },
    {
      to: "/responses",
      Icon: BsChatSquareQuote,
      title: "Відгуки",
      className: "link",
      activeClassName: "link--active",
    },
    {
      to: "/orders",
      Icon: FiShoppingCart,
      title: "Замовлення",
      className: "link",
      activeClassName: "link--active",
    },
    {
      to: `/user/${userId}`,
      exact: true,
      title: `${username}`,
      className: "link",
      activeClassName: "link--active",
    },
  ]
}

const mainRoutes: IRoute[] = [
  { component: Home, path: "/", exact: true },
  { component: About, path: "/about" },
  { component: Booking, path: "/booking" },
  { component: Gallery, path: "/gallery" },
  { component: Profile, path: "/user/:userId", exact: true },
  { component: Responses, path: "/responses" },
]

const routes = {
  admin: [...mainRoutes, { component: Orders, path: "/orders" }],
  user: [...mainRoutes, { component: Orders, path: "/orders" }],
  unregUser: [...mainRoutes],
}

export default routes