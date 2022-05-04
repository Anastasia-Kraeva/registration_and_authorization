import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import {BASE_URL} from '../constants/constants';
import * as actions from '../store/actions/actionCreaters';
import {useTypedSelector} from '../hooks/typedSelector';

import NavBar from '../components/navBar/NavBar';
import {navElementType, ILoginElement, ILogoutElement} from '../components/navBar/types';

const HomePage: FC = (): JSX.Element => {
  const {access} = useTypedSelector(state => state.token);

  const loginElement: ILoginElement = {
    tag: Link,
    props: {
      href: '/registration',
      color: 'inherit',
      children: 'ВОЙТИ',
    },
  };

  const logoutElement: ILogoutElement = {
    tag: Button,
    props: {
      color: 'inherit',
      children: 'ВЫЙТИ',
      onClick: logout,
    },
  };

  const navElements: navElementType[] = [
    access ? logoutElement : loginElement
  ];

  const dispatch = useDispatch();

  function logout(): void {
    dispatch(actions.logout());

    try {
      axios.post(`${BASE_URL}/logout/`)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <NavBar title="Домашняя страница"
              navElements={navElements}/>
      <p>
        Контент, мотивирующий зарегистрироваться на сайте.
      </p>
    </>
  );
};

export default HomePage;
