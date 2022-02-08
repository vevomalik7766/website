import React from 'react';
import { Header, Footer } from './components/common'
import './App.css';
import './Home.css';

function App() {
return (
<div className="App">
<Header />
<br />
<br />
<div>
<section className="homeTop">
<img src="./bg1.png" className="home-item" alt="Logo" />
      <p className="home-item top"> Create, Manage & Boost Your Business 
      <br />
      <p className='content'>DocFlow is blockchain-based document management software that digitizes the entire paperwork cycle and uses advanced smart contract mechanisms to guarantee uncompromised data security and authenticity. A lightbulb moment for your paperwork.</p>
      <p className='content'>&nbsp;</p>
      <a href="/" className="home-item top" align="left"><button className='btn'>Get Started</button></a>
      </p>
    </section>
</div>

<div>
    <br />
    <br />
    <br />
<table align='center' className='tbl1'>
        <tr>
          <th>Document Management System</th>
        </tr>
        <tr>
          <td className='dms'>
            <ul>
                <li>Forget compromising your internal workflow and data security</li>
                <li>Skip time-consuming doc processing routines</li>
                <li>Avoid risk from third-party online document management services</li>
                <li>Stop jeopardizing sensitive papers during their processing or approval</li>
            </ul>
            </td>
        </tr>
      </table>
</div>
<br />
<br />
<div className='features'>
    <a id="features"><h1>Features</h1></a>
    
<table>
<tr>
    <td><section className='card'>
    <img src="./f1.svg" alt="EA" />
        <p>Electronic Agreement</p>
        </section></td>
        <td><section className='card'>
    <img src="./f2.svg" alt="EA" />
        <p>Signature status tracking and management</p>
        </section></td>
    <td><section className='card'>
    <img src="./f3.svg" alt="EA" />
        <p>Original verification by electronic signature</p>
        </section></td>
        <td><section className='card'>
    <img src="./f4.svg" alt="EA" />
        <p>Document organizing and archiving</p>
        </section></td>
</tr>
<br />
<tr>
    <td><section className='card'>
    <img src="./f5.svg" alt="EA" />
        <p>Secure document sharing</p>
        </section></td>
        <td><section className='card'>
    <img src="./f6.svg" alt="EA" />
        <p>Document authentication</p>
        </section></td>
        <td><section className='card'>
    <img src="./f7.svg" alt="EA" />
        <p>Blockchain History Verification</p>
        </section></td>
        <td><section className='card'>
    <img src="./f8.svg" alt="EA" />
        <p>NFT Issue and Management</p>
        </section></td>
</tr>
</table>
</div>
<br />

<br />
<br />
<a id="howitworks"><h1 align='center'>How it Works?</h1></a>
<br />
<br />
<table>
    <tr>
        <td><img src="./hw1.png" width='500px' height='500px' alt="HW1" /></td>
        <td>
            <ol>
               <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol> 
        </td>
    </tr>
    <tr>
        <td></td>
        <td><img src="./hw2.png" width='500px' height='500px' alt="HW2" /></td>
    </tr>
</table>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<Footer />
</div>
);
}

export default App;
