import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from "./styles"
import { theme } from '../../global/styles/theme'
import { View, Text } from 'react-native'
import { GuildIcon } from '../GuildIcon'
import { categories } from '../../utils/categories'

import Player from "../../assets/player.svg"
import Calendar from "../../assets/calendar.svg"

export type GuildProps = {
    id: string
    name: string
    icon: string
    owner: boolean
}

export type AppointmentProps = {
    id: string
    guild: GuildProps
    category: string
    date: string
    description: string
}

type Props = RectButtonProps & {
    data: AppointmentProps
}

export function Appointment({data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category)

    const { owner } = data.guild

    return (

        <RectButton {...rest} >

            <View style= { styles.container} >

                <GuildIcon />

                <View style= {styles.content}>
                    <View style= {styles.header}>
                        <Text style= {styles.title}>
                            {data.guild.name}
                        </Text>

                        <Text style= {styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style ={styles.footer}>

                        <View style={styles.dateInfo}>

                            <Calendar/>

                            <Text style={styles.date}>
                                { data.date }
                            </Text>
                        </View>

                        <View style= {styles.playerInfo}>
                        <Player fill ={ owner ? theme.colors.primary : theme.colors.on } />

                        <Text style= {[
                            styles.player, { color: owner ? theme.colors.primary : theme.colors.on }
                        ]}>
                            { owner ? 'Anfitri??o' : 'Visitante'}
                        </Text>
                    </View>
                
                    </View>

                </View>

            </View>

        </RectButton>
    )

}