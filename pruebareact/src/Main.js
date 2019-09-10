import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./Home";
import Users from "./Users";
import About from "./About";

const MainSection = styled.main`
    padding: 10px 20px;

    a {
        color: #000;
    }
    a:hover {
        color: #fff;
    }
`;
const Main = () => (
    <MainSection>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
        </Switch>
    </MainSection>
);

export default Main;