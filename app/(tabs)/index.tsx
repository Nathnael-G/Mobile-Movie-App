import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
className="items-center justify-center flex-1"
    >
      <Text className="text-red-500">This is my movie App</Text>
            <Text className="text-5xl font-bold text-dark-200">Welcome</Text>
            {/* <Link href="/onboarding" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
        Go to Onboarding
      </Link>
<Link
  href="/movie/Avengers"
  className="px-4 py-2 mt-4 text-white rounded bg-accent"
>
  movie details
</Link> */}
    </View>
  );
}
