import { DeviceEventEmitter } from 'react-native';
import AtmarqiActsKnunt from '../QintarCaitsComnipns/AtmarqiActsKnunt';
import React, { useEffect } from 'react';
const { width: sarmtw, height: tacath } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Dimensions, Image, Share, } from 'react-native';
import { sartiqafntsoria } from '../sartiqafntsoria';

interface Props {
    passedLevels: boolean[];
    userAnswers: number[];
    questions?: any[]; // додано
    setCurrentLevel: (level: number) => void;
    restartLevel: () => void;
    backToLevels: () => void;
    returKotikHom?: () => void; // додано
}

export default function ShowingTestRelstus({
    userAnswers,
    restartLevel,
    questions, // додано
    returKotikHom
}: Props) {
    const usdQonuqsins = questions || [];
    const qounterOfCorct = userAnswers.reduce((acc, ansIdx, idx) => {
        const q = usdQonuqsins[idx];
        if (!q) return acc;
        // Підтримка різних структур (answer/correct)
        const correct = q.correct ?? q.answer;
        return acc + (ansIdx === correct ? 1 : 0);
    }, 0);
    const isPassed = qounterOfCorct >= 4;

    useEffect(() => {
        (async () => {
            const tangerines = await AsyncStorage.getItem('tinqotangerines');
            const currentTangerines = tangerines ? parseInt(tangerines, 10) : 0;
            const newTangerines = isPassed ? currentTangerines + 10 : currentTangerines;
            await AsyncStorage.setItem('tinqotangerines', newTangerines.toString());
            // Додаємо емісію івенту для оновлення хедера
            DeviceEventEmitter.emit('tinqotangerinesUpdated');
        })();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
            <View style={{ marginBottom: tacath * 0.04, marginTop: - tacath * 0.023 }}>
                <Image source={isPassed
                    ? require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/happycat.png')
                    : require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/sadcatty.png')
                }
                    style={{
                        width: sarmtw * 0.6,
                        height: tacath * 0.23,
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <View style={{
                alignItems: 'center', width: sarmtw * 0.85, paddingVertical: tacath * 0.03,
            }}>
                <Text style={{
                    color: '#2E6D53',

                    fontSize: sarmtw * 0.08,

                    marginBottom: tacath * 0.01,

                    fontFamily: sartiqafntsoria.qronsitao,

                }}>{isPassed ? 'You won!' : 'Try Again'}</Text>
                <Text style={{
                    textAlign: 'center',
                    marginBottom: tacath * 0.025,

                    fontSize: sarmtw * 0.05,
                    fontFamily: sartiqafntsoria.casrach,
                    color: '#5D1F13',
                }}>
                    {isPassed
                        ? 'Great thinking. More puzzles are waiting.'
                        : 'Don’t worry. Every mistake helps you learn.'}
                </Text>

                {isPassed && (
                    <Image source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/plutentegrs.png')} style={{
                        width: sarmtw * 0.25,
                        marginBottom: tacath * 0.03,
                        resizeMode: 'contain',
                        height: tacath * 0.07,
                    }}
                    />
                )}

                {[
                    {
                        label: 'Play more',
                        onPress: restartLevel, // змінено тут
                    },
                    {
                        label: 'Share',
                        onPress: () => {
                            Share.share({
                                message: `I have ${qounterOfCorct} correct answers in the Quiz! Can you beat my score?`,
                            })
                        },
                    },
                    {
                        label: 'Home',
                        onPress: returKotikHom ? returKotikHom : () => { }, // додано тут
                    }
                ].map((btn, idx) => (
                    <AtmarqiActsKnunt timiTixtLbl={btn.label} key={idx} onPress={btn.onPress} adothStyliOfCont={{
                        marginTop: tacath * 0.01,
                        height: tacath * 0.064,
                        borderRadius: sarmtw * 0.1,
                        width: sarmtw * 0.5,
                    }} butnColor='green'
                    />
                ))}
            </View>
        </View>
    );
}
