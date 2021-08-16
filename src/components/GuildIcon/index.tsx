import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from "./styles"
import { theme } from '../../global/styles/theme'
import { Image, Text } from 'react-native'


export function GuildIcon() {

    const uri = 'https://blog.logomyway.com/wp-content/uploads/2020/12/discord-mascot.png'
    
    return (
        <Image source={{ uri }}
        style = {styles.image}
        resizeMode="cover"
        />

    )
}