import { AntDesign } from '@expo/vector-icons'
import { BottomSheetModal, BottomSheetView, BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { useCallback, useRef, useState } from 'react'
import { Button, Text, View, TouchableOpacity, Alert } from 'react-native'

export default function CreateTaskSheet() {
    const bottomSheetRef = useRef<BottomSheetModal>(null)
    const [name, setName] = useState('')
    const [date, setDate] = useState('')

    const handleOpenSheet = useCallback(() => {
        bottomSheetRef.current?.present()
    }, [])

    function handleAddTask(){
        if (name.length === 0 || date.length === 0){
            return Alert.alert('Preencha os campos')
        }
    }

    const task = {
        id: '1',
        name,
        date,
    }

    console.log(task)

    return (
        <View>
            <TouchableOpacity onPress={handleOpenSheet}>
                <AntDesign name='pluscircle' size={26} color='white' />
            </TouchableOpacity>

            <BottomSheetModal
                ref={bottomSheetRef}
                index={1}
                snapPoints={[1]}
                enableDynamicSizing
                enableOverDrag
            >
                <BottomSheetView
                style={{
                    padding: 24,
                    paddingBottom: 56,
                }}>
                    <Text>Crie sua Tarefa</Text>

                    <BottomSheetTextInput 
                    value={name} 
                    onChangeText={setName} 
                    placeholder="Nome da Atividade" />

                    <BottomSheetTextInput 
                    value={date} 
                    onChangeText={setDate} 
                    placeholder="05/08/2024" />

                    <Button onPress={handleAddTask} title="Criar" />
                </BottomSheetView>
            </BottomSheetModal>
        </View>
    )
}