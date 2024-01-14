import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectHandler: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirectPath && redirectPath !== window.location.href) {
      navigate(redirectPath.replace(window.location.origin, ''));
    }
  }, [navigate]);

  return null; // This component does not render anything
};

export default RedirectHandler;
