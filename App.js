import { StatusBar } from 'expo-status-bar';
import { ContentSafe } from './src/Styles/Global';
import Routes from './src/Routes';
export default function App() {

  return (
    <ContentSafe>
        <StatusBar style='auto'/>      
        <Routes/>    
    </ContentSafe>
  );
}