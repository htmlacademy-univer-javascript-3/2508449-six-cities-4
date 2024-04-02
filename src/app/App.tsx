import { Main } from '../pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { cards } from '../mock/mock';
import { Favorites } from '../pages/Favorites';
import { Login } from '../pages/Login';
import { Offer } from '../pages/Offer';
import { Layout } from './Layout';
import { ProtectedRoute } from '../components/ProtectedRoute';


export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main cards={cards} />} />
      </Route>
      <Route
        path="offer/:id"
        element={<Offer />}
      />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute user=''>
            <Favorites />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route path="*" element={
        <><h1>Ошибка 404. Запрашиваемой страницы не существует.</h1><h2><a href="/">Вернуться на главную</a></h2></>
      }
      />
    </Routes>
  </BrowserRouter>
);
