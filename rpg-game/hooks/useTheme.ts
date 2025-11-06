import { useEffect, useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";

type themeType = {
    background: string,
    text: string,
    header: string,
    tabBar: string
}

export default function useTheme() {
    const systemTheme = useColorScheme()
    const [theme, setTheme] = useState<'light' | 'dark' | 'default'>('default')
    const [colorTheme, setColorTheme] = useState<themeType>(Colors.light)

    useEffect(() => {
        if (theme === 'default') {
            setColorTheme(systemTheme === 'light' || systemTheme === null ? Colors.light : Colors.dark)
        } else {
            setColorTheme(theme === 'light' ? Colors.light : Colors.dark)
        }
    }, [theme, systemTheme])

    return { colorTheme, theme, setTheme, globalStyles }
}

const Colors = {
    light: {
        background: '#ffffffff',
        text: '#000000ff',
        header: '#e7e7e7ff',
        tabBar: '#e7e7e7ff'
    },
    dark: {
        background: '#333333ff',
        text: '#ffffffff',
        header: '#201e35ff',
        tabBar: '#060058ff'
    }
}

const globalStyles = StyleSheet.create({

})