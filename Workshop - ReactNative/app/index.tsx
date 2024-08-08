import CreateTaskSheet from '@/components/CreateTaskSheet'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
    return (
        <BottomSheetModalProvider>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>To-Do Lists</Text>

                    <CreateTaskSheet />
                </View>
                <Text>Olá mundo</Text>
            </View>
        </BottomSheetModalProvider>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#efefef',
    },

    header: {
        height: 110,
        backgroundColor: '#1d4ed8',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 30,
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
})