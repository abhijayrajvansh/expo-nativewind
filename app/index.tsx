import { Text, View } from "react-native";
import { Link } from 'expo-router';
import '@/styles/global.css';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Home screen
      </Text>
      
      <Link className="text-xl pt-5" href="/profile">move to profile screen</Link>
      <Link className="text-xl pt-5" href="/about">move to about screen</Link>
      
    </View>
  );
}
