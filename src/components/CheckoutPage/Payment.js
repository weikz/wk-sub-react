import React from 'react';
import { Link } from 'react-router';

const Payment = () => (
    <div>
        <form action="/checkout" method="post">
            <label>方案:</label>
            <select name="plan">
            <option value="large">$999 旗艦方案</option>
            <option value="medium">$499 豪華方案</option>
            <option value="light">$299 輕量方案</option>
            </select>

            <label>Email:</label>
            <input type="email"  name="email" placeholder="me@weikz.net" required />

            <label>驗證密碼:</label>
            <input type="password" name="password" placeholder="Password" required />

            <label>收件人:</label>
            <input type="text" name="name" placeholder="張瑋康" required  />

            <label>收件地址:</label>
            <input type="text" name="address" placeholder="台北市信義區信義路五段7號" required  />

            <label>聯絡手機:</label>
            <input type="text" name="phone" placeholder="0920123456" required  />


            <label className="validation"></label>

            <button type="submit">建立訂單</button>
        </form>
    </div>
);

export default Payment;