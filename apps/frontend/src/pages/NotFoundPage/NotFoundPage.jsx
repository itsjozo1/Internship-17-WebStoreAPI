import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  function handleReturn() {
    navigate('/');
  }

  return (
    <div>
      <h1>404 - Not Found</h1>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
}

export default NotFoundPage;
