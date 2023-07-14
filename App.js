// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';
import Home from "./screens/home";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
