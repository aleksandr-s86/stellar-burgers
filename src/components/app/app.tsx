import React from 'react';
import { AppHeader } from '@components';
import { ConstructorPage, Feed,
  ForgotPassword, Login,
  NotFound404, Profile,
  ProfileOrders, Register,
  ResetPassword } from '@pages';
//import { Preloader } from '@ui';
import { Routes, Route } from 'react-router-dom';
import {Modal} from '@components/modal';
import { OrderInfo } from '@components/order-info';
import {IngredientDetails} from '@components/ingredient-details';

//import type { AppContentProps } from './type';
//import type { TIngredient } from '@utils-types';


import '../../index.css';

import styles from './app.module.css';


const App = (): React.JSX.Element => {
  // Заглушка для onClose — будет реализована позже
  const handleClose = () => {};
  //const ingredients: TIngredient[] = [];
  //const isIngredientsLoading = false;
  //const ingredientsError = null;


  return (
    <div className={styles.app}>
      <AppHeader />
      {/*
      <AppContent
        ingredients={ingredients}
        isLoading={isIngredientsLoading}
        error={ingredientsError}
      />
      */}

      <Routes>
        <Route path="/" element={<ConstructorPage />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/orders" element={<ProfileOrders />} />


        <Route path="/feed/:number" element={<Modal title="Детали заказа"
              onClose={handleClose}><OrderInfo/></Modal>}/>
        <Route path="/ingredients/:id" element={<Modal  title="Информация об ингредиенте"
              onClose={handleClose}><IngredientDetails/></Modal>}/>
        <Route path="/profile/orders/:number" element={<Modal  title="Детали заказа"
              onClose={handleClose}><OrderInfo/></Modal>}/>
        <Route path="*" element={<NotFound404 />} />
      </Routes>

    </div>
  );
};

export default App;

/* Маршруты показываются только когда ингредиенты загружены: без них не
   отрисовать ни конструктор, ни состав заказа. */
/*const AppContent = ({
  ingredients,
  isLoading,
  error,
}: AppContentProps): React.JSX.Element => {
  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return (
      <p className={`${styles.message} text text_type_main-medium`}>
        Не удалось загрузить ингредиенты
        {error.message ? `: ${error.message}` : '.'}
      </p>
    );
  }

  if (!ingredients.length) {
    return (
      <p className={`${styles.message} text text_type_main-medium`}>Нет ингредиентов</p>
    );
  }

  return <RouteComponent />;
};*/


