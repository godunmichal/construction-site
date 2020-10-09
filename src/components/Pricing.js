import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { GiSpookyHouse } from 'react-icons/gi';
import { BsHouseDoorFill } from 'react-icons/bs';
import { GiFamilyHouse } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/products' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsHouseDoorFill />
                </div>
                <h3>Standard</h3>
                <h4>$2000</h4>
                <p>per meter</p>
                <ul className='pricing__container-features'>
                  <li>Standard home equipment</li>
                  <li>Photovoltaic panels excluded</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='dark-btn'>
                  Choose House
                </Button>
              </div>
            </Link>
            <Link to='/products' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiFamilyHouse />
                </div>
                <h3>Premium</h3>
                <h4>$2500</h4>
                <p>per meter</p>
                <ul className='pricing__container-features'>
                  <li>Premium home equipment</li>
                  <li>Photovoltaic panels included</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='green'>
                  Choose House
                </Button>
              </div>
            </Link>
            <Link to='/products' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiSpookyHouse />
                </div>
                <h3>Exclusive</h3>
                <h4>$3500</h4>
                <p>per meter</p>
                <ul className='pricing__container-features'>
                  <li>Exclusive home equipment</li>
                  <li>Photovoltaic panels included</li>
                  <li>Entresol</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='dark-btn'>
                  Choose House
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
