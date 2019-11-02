import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Project from '~/pages/Project';
import ProjectDetail from '~/pages/ProjectDetail';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/project" exact component={Project} isPrivate />
      <Route
        path="/projectDetail/:id"
        exact
        component={ProjectDetail}
        isPrivate
      />
      <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}
