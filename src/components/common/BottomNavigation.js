import React, { Component } from 'react';
import { BsFillHouseDoorFill, BsList, BsPlus, BsFillBellFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './BottomNavigation.css';

export default class BottomNavigation extends Component {
  render() {
    return (
      <nav className="bottom-navbar">
        <ul>
          <li>
            <Link to="/">
              <BsFillHouseDoorFill />
              <span>홈</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsList />
              <span>분류</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsPlus />
              <span>더하기</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsFillBellFill />
              <span>구독</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="./assets/images/if.png" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
