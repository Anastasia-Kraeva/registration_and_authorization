// @ts-nocheck
import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import {BASE_URL} from '../constants/constants';
import * as actions from '../store/actions/actionCreaters';
import {useTypedSelector} from '../hooks/typedSelector';

import NavBar from '../components/navBar/NavBar';
import {INavElement} from '../components/navBar/types';

const HomePage: FC<any> = (): JSX.Element => {
  const {access} = useTypedSelector(state => state.token);

  const loginElement = {
    tag: Link,
    props: {
      href: '/registration',
      color: 'inherit',
      children: 'ВОЙТИ',
    },
  };

  const logoutElement = {
    tag: Button,
    props: {
      color: 'inherit',
      children: 'ВЫЙТИ',
      onClick: logout,
    },
  };

  const navElements: INavElement[] = [
    access ? logoutElement : loginElement
  ];

  const dispatch = useDispatch();

  function logout() {
    dispatch(actions.logout());

    try {
      axios.post(`${BASE_URL}/logout/`).then(response => {
        console.log('logout', response);
      });
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
