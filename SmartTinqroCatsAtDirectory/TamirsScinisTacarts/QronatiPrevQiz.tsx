import numberpuzles from '../AmartinqAtinroAsetsQoat/quizqests/numberpuzles';
import { sartiqafntsoria } from '../sartiqafntsoria';
import { View, Dimensions, Image, Text, } from 'react-native';
import AtmarqiActsKnunt from '../QintarCaitsComnipns/AtmarqiActsKnunt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShowingTestRelstus from './ShowingTestRelstus';
import React, { useState } from 'react';

import brainquiiz from '../AmartinqAtinroAsetsQoat/quizqests/brainquiiz';
import UserAnswerHere from './UserAnswerHere';

const { width: gihiws, height: rofeh } = Dimensions.get('window');

const otrmSlychPytann = (arr: any[], count: number) => {
    const resmasiv = [];
    const ispolsovane = new Set<number>();
    while (resmasiv.length < count && ispolsovane.size < arr.length) {
        const idx = Math.floor(Math.random() * arr.length);
        if (!ispolsovane.has(idx)) {
            ispolsovane.add(idx);
            resmasiv.push(arr[idx]);
        }
    }
    return resmasiv;
};



interface Props {
    setQinaroScnage: (tab: any) => void;
    smarqrpgsnc: any;
    setHideBottomBar?: (hide: boolean) => void; // додано
}

export default function QronatiPrevQiz({ setQinaroScnage, smarqrpgsnc, setHideBottomBar }: Props) {
    const [isPushdQiz, setPushdQiz] = useState(false);
    const [vidpovidi, setVidpovidi] = useState<number[]>([]);
    const [pokazResultat, setPkzReslt] = useState(false);


    const returKotikHom = () => {
        setQinaroScnage('Tinqer Smart Main Gome Page');
    }

    // Скидання стану при зміні типу квіза (через key)
    React.useEffect(() => {
        setPushdQiz(false);
        setVidpovidi([]);
        setPkzReslt(false);
    }, []); // компонент буде повністю пересозданий через key

    const QUESTIONS = React.useMemo(() => {
        let source;
        if (smarqrpgsnc === 'Brain Quiz') {
            source = brainquiiz;
        } else {
            source = numberpuzles;
        }
        // Map to unified format
        return otrmSlychPytann(source, 5).map(q => ({
            word: q.question,
            options: q.options,
            correct: q.answer ?? q.correct
        }));
    }, [smarqrpgsnc]);

    // Оголошення correctCount ДО useEffect
    const correctCount = vidpovidi.reduce(
        (acc, ans, idx) =>
            acc + (QUESTIONS[idx] && ans === QUESTIONS[idx].correct ? 1 : 0),
        0
    );

    const handleRestart = () => {
        setVidpovidi([]);
        setPkzReslt(false);
        setPushdQiz(false);
    };

    const handleBack = async () => {
        setQinaroScnage('Tinqer Smart Main Gome Page');
    };

    React.useEffect(() => {
        if (pokazResultat && correctCount >= 16) {
            AsyncStorage.setItem('mightyRushPassed', 'true');
        }
    }, [pokazResultat, correctCount]);

    React.useEffect(() => {
        if (setHideBottomBar) {
            setHideBottomBar(pokazResultat);
        }
    }, [pokazResultat, setHideBottomBar]);

    // --- START SCREEN ---
    if (!isPushdQiz) {
        return (
            <View style={{
                justifyContent: 'flex-start',
                flex: 1,
                alignItems: 'center',
            }}>

                <Image source={smarqrpgsnc === 'Brain Quiz'
                    ? require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/catwithmandarin.png')
                    : require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/smartkit.png')
                }
                    style={{
                        resizeMode: 'contain',
                        marginTop: rofeh * 0.03,
                        height: gihiws * 0.7,
                        // marginBottom: -rofeh * 0.04,
                        width: gihiws * 0.7,
                    }}
                />
                <Text style={{
                    color: '#5D1F13',
                    fontSize: gihiws * 0.048,
                    textAlign: 'center',
                    marginBottom: rofeh * 0.03,
                    marginTop: rofeh * 0.07,
                    paddingHorizontal: gihiws * 0.07,
                    fontFamily: sartiqafntsoria.smarmetooner,
                }}>{smarqrpgsnc === 'Brain Quiz'
                    ? 'Let’s warm up your mind.\nReady for a few puzzles?'
                    : 'A curious mind always finds the answer.'}
                </Text>

                <AtmarqiActsKnunt
                    onPress={() => setPushdQiz(true)}
                    timiTixtLbl={`Start`}
                    adothStyliOfCont={{
                        width: gihiws * 0.7,
                        height: rofeh * 0.07,
                    }}
                    isScoundrel={false}
                />

            </View>
        );
    }

    // --- QUIZ SCREEN ---
    if (isPushdQiz && !pokazResultat) {
        return (
            <UserAnswerHere
                questions={QUESTIONS}
                goToResult={() => setPkzReslt(true)}
                userAnswers={vidpovidi}
                setUserAnswers={setVidpovidi}
            />
        );
    }

    // --- RESULT SCREEN ---
    if (pokazResultat) {
        const handleShare = () => {
            // Тут логіка для шарінгу, наприклад через Share API
        };
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                flex: 1,
                paddingTop: rofeh * 0.09,
            }}>
                <ShowingTestRelstus
                    backToLevels={handleBack}
                    onShare={handleShare}
                    returKotikHom={returKotikHom}
                    notGreen={true}
                    questions={QUESTIONS}
                    userAnswers={vidpovidi}
                    restartLevel={handleRestart}
                />
            </View>
        );
    }
}
