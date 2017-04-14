import React from 'react';

import styles from './Form.module.css';
import { Panel } from 'react-bootstrap'; 
import avatar from '../images/profile.png';

import { Button } from 'react-bootstrap';

const Form = () => (
    <div className={styles.container}>
    <Panel>
    <img src={avatar}/>
    <form>
        <div className={styles.login}>
            <input type="text" name="username" placeholder="Enter Email"></input>
        </div>
        <div className={styles.login}>
            <input type="password" name="password" placeholder="Enter Password"></input>
        </div>
        <Button bsStyle="primary" type="submit">登入</Button>
        <br/>
    </form>
    </Panel>
    </div>

);

export default Form;