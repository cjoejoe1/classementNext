import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import Link from 'next/link'
const Toggle = ({checked, setChecked, radioValue, setRadioValue, target}) => {
  // const [checked, setChecked] = useState(false);
  // const [radioValue, setRadioValue] = useState('1');

  console.log('target is', target)
  const radios = [
    { name: 'Particulier', value: '1' },
    { name: 'Professionnel', value: '2' },

  ];

  return (
    <>
    {target === 'pro' ? 
    <div>
    <Link href='/'><Button variant="primary-outline">Particulier</Button></Link>
    <Link href='/pro/'><Button variant="danger" style={{marginLeft: 10}}>Professionnel</Button></Link>
    </div>
    : 
    <div>
    <Link href='/'><Button variant="primary">Particulier</Button></Link>
    <Link href='/pro/'><Button variant="danger-outline" style={{marginLeft: 10}}>Professionnel</Button></Link>
    </div>
    }
    </>
  );
}

export default Toggle