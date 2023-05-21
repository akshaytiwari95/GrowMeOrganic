import { Button, TextField } from '@mui/material';
import { computeFlexColumnsWidth } from '@mui/x-data-grid/hooks/features/columns/gridColumnsUtils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Userlogin() {
  const [name, setName] = useState(''); // state for name in the form
  const [phoneNumber, setPhonenumber] = useState(''); // state for phonenumber in the form
  const [email, setEmail] = useState(''); // state for email in the form
  const navigation = useNavigate(); // hook to route to the given url on submitting form

  function handleSubmit(e) {
    // function alled on submitiing the form
    e.preventDefault();
    name && phoneNumber && email
      ? navigation('page')
      : alert('enter the details before accessing the page');

    const data = JSON.parse(localStorage.getItem('userData')); // to get the data from the local storage
    data
      ? localStorage.setItem(
          'userData',
          JSON.stringify([
            ...data,
            { userName: name, number: phoneNumber, emailaddress: email },
          ])
        )
      : localStorage.setItem(
          'userData',
          JSON.stringify([
            { userName: name, number: phoneNumber, emailaddress: email },
          ])
        );
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10rem',
      }}
    >
      <TextField
        type="text"
        variant="outlined"
        color="secondary"
        label="Name"
        onChange={e => setName(e.target.value)}
        value={name}
        sx={{ width: '50rem' }}
      />
      <TextField
        type="email"
        variant="outlined"
        color="secondary"
        label="E-mail"
        onChange={e => setEmail(e.target.value)}
        value={email}
        sx={{ width: '50rem' }}
      />
      <TextField
        type="number"
        variant="outlined"
        color="secondary"
        label="PhoneNumber"
        onChange={e => setPhonenumber(e.target.value)}
        value={phoneNumber}
        sx={{ width: '50rem' }}
      />

      <Button variant="outlined" color="secondary" type="submit">
        Login
      </Button>
    </form>
  );
}
export default Userlogin;
