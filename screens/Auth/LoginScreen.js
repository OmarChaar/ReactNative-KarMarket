import AuthContent from '../../components/Auth/AuthContent';
import { login } from '../../util/auth';
import { useState, useContext } from 'react';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../../store/auth-context';


function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);


  async function lginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch(error) {
      Alert.alert(
        'Authentication Failed', 
        'Could not log you in. Please check you credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />
  }

  return <AuthContent isLogin onAuthenticate={lginHandler} />;
}

export default LoginScreen;