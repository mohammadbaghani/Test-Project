import { Routes, Route } from "react-router-dom";
import  MovieDetail  from "./pages/MovieDetail";
import Search  from "./pages/Search";
import MovieList  from "./pages/MovieList";
import PageNotFound  from "./pages/PageNotFound";
const AllRoutes = () => {
    return (
        <div className="dark:bg-slate-700">
            <Routes>
                <Route path="" element={<MovieList apiPath="movie/now_playing"  title="" />} />
                <Route path="movie/:id" element={<MovieDetail />} />          
          
                <Route path="search" element={<Search apiPath="search/movie" />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
};

export default AllRoutes;