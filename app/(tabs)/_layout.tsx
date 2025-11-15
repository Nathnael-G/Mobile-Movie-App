import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text } from 'react-native'
import { icons } from '../../constants/icons'
import { images } from '../../constants/images'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index" options={{headerShown: false,
            title: "Home",
            tabBarIcon: ({focused}) =>( 
            <>
            <ImageBackground
            source={images.highlight}
className='flex flex-row flex-1 w-full min-h-14 min-w-[112px] justify-center items-center mt-4 rounded-full overflow-hidden'>            <Image source={icons.home} tintColor="#151312" className="size-5"/>
            <Text className='ml-2 text-base font-semibold text-secndary'>Home</Text>
            </ImageBackground>
            </>)
        }}/>
        <Tabs.Screen
        name="search" options={{headerShown: false,
            title: "Search",
        }}/>
        <Tabs.Screen
        name="saved" options={{headerShown: false,
            title: "Saved",}}/>
        <Tabs.Screen
        name="profile" options={{headerShown: false,
            title: "Profile",
        }}/>
    </Tabs>
  )
}

export default _layout