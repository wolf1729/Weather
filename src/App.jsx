import { useNavigate } from 'react-router-dom';
import '../src/style/app.css';

function App() {
  const navigate = useNavigate();
  
  const nameNavigateFunction = () => {
    navigate('/name')
  }

  const coordinateNavigateFunction = () => {
    navigate('/coordinate')
  }

  return (
    <>
    <div className='back'>
      <button type="button" onClick={nameNavigateFunction} className='name'>Use Name</button>
      <button type="button" onClick={coordinateNavigateFunction} className='coor'>Use Co-ordinates</button>
    </div>
    </>
  )
}

export default App