import React from 'react';
import { HomePage } from '../page/index';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Switch } from 'react-router-dom';
class Routes extends React.Component {
    render() {
        return (

            <div className="menu">
                <Button color="inherit">Home</Button>
                <BrowserRouter basename={'/'}>
                    <Switch>
                        <Route exact path='/auth/login' component={HomePage} />
                        <Route path='/' component={HomePage} />
                    </Switch>
                </BrowserRouter>
            </div >

        );
    }


}

export default Routes;