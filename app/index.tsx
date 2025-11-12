import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
className="flex-1 justify-center items-center"
    >
      <Text className="text-red-500">This is my movie App</Text>
            <Text className="text-dark-200 text-5xl font-bold">Welcome</Text>
            {/* <Link href="/onboarding" className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">
        Go to Onboarding
      </Link>
<Link
  href={{
    pathname: "/movie/[id]",
    params: { id: "avengers" }
  }}
  className="mt-4 px-4 py-2 bg-accent rounded text-white"
>
  movie details
</Link> */}

    </View>
  );
}
