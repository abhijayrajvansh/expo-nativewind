import '@/styles/global.css';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-black absolute top-10">
        Home screen
      </Text>
      
      <View className='flex-col gap-2'>
        <Link className="flex-row items-center" href="/profile">move to profile screen
        <AntDesign className="ml-2" name="arrow-right" size={12} color="black" />
      </Link>
      
      <Link className="flex-row items-center" href="/about">move to about screen
        <AntDesign className="ml-2" name="arrow-right" size={12} color="black" />
      </Link>
      </View>
      
    </View>
  );
}
