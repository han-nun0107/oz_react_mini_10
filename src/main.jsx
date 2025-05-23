import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MovieDetail from "../src/component/MovieDetail.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieCard from "./component/MovieCard.jsx";
import Layout from "./component/Layout.jsx";
import { MovieProvider } from "./context/movieProvider.jsx";
import Login from "./component/LoginPage.jsx";
import Join from "./component/JoinPage.jsx";
import { SupabaseProvider } from "./context/index.jsx";
import MyPage from "./component/MyPage.jsx";
import UserProfile from "./component/userProfile.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MovieProvider>
      <SupabaseProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="MovieCard" element={<MovieCard />} />
            <Route path="movie/:movieId" element={<MovieDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
            <Route path="myPage" element={<MyPage />} />
            <Route path="userprofile" element={<UserProfile />} />
          </Route>
        </Routes>
      </SupabaseProvider>
    </MovieProvider>
  </BrowserRouter>
);
