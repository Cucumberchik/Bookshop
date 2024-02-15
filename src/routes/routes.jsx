import { Route, Routes } from "react-router-dom";
import Books from "../components/pages/books/books";
import Categories from "../components/pages/categories/categories";
import Recent from "../components/pages/recent/recent";
import Admin from "../components/pages/Admin/admin";
import Home from "../components/pages/home/home";
import Detail from "../components/pages/Detail/details";
import MyBooks from "../components/pages/my_books/myBooks";

export default function RoutesRoute() {
    const PUBLIC = [
        { path: "/", element: <Home />, key: 1 },
        { path: "/categories", element: <Categories />, key: 2 },
        { path: "/recent", element: <Recent />, key: 3 },
        { path: "/books", element: <Books />, key: 4 },
        { path: "/admin", element: <Admin />, key: 5 },
        { path: "/books/:id", element: <Detail />, key: 6 },
        { path: "/my-books", element: <MyBooks />, key: 7 }
    ];

    const routeComponents = PUBLIC.map(el => (
        <Route path={el.path} element={el.element} key={el.key} />
    ));

    return <Routes>{routeComponents}</Routes>;
}
