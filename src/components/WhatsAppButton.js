// archivo WhatsAppButton.js
import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [userName, setUserName] = useState('');
  const [placeholder, setPlaceholder] = useState('Ingresa tu nombre');

  const handleChange = (event) => {
    setUserName(event.target.value);
    setPlaceholder('');
  };

  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=56951486792&text=Hola, mi nombre es ${userName}&source=&data=`, '_blank');
  };

  return (
    <div className="whatsapp-container">
      <input className="whatsapp-input"
        type="text" 
        placeholder={placeholder} 
        value={userName}
        onChange={handleChange} 
      />
      <button onClick={handleClick} className="whatsapp-botton" >Ir a WhatsApp</button>
    </div>
  );
};

export default WhatsAppButton;
