import { View } from 'react-native'

type emptySpaceProp = {
    pixels?: number
}
export default function EspacioVacio(props: emptySpaceProp) {
    if (props.pixels != null) {
        return (
            <View style={{ padding: props.pixels }}></View>
        )
    }
    return (
        <View style={{ padding: 10 }}></View>
    )
}