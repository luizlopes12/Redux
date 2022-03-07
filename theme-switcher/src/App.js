import { Switch } from '@mui/material';
import { useState } from 'react'
import { Container } from './styled'
function App() {
  const [active, setActive] = useState(false)
  const handleChange = () =>{
    setActive(!active)
  }
  return (
    <Container theme={active}>
      <Switch onChange={handleChange}/>
    </Container>
  );
}

export default App;
