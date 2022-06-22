import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import {
  Bell,
  BorderOuter,
  CardList,
  ClockHistory,
  Journal,
  People,
  PersonCircle,
  Sliders,
  Speedometer,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
const FooterNavbar = () => {
  return (
    <footer class="position-fixed">
      <p>
        Made With Love
        <a href="https://profithooks.com/">
          {" "}
          <strong>Hoodie Techno</strong>
        </a>
        .
      </p>
    </footer>
  );
};

export default FooterNavbar;
