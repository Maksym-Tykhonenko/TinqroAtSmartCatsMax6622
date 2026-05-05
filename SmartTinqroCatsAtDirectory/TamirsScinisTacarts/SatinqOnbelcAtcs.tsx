import React, { useState as useXemli } from 'react';
const KIRPLOX = 'qaz-12x9-uvb7-tyrplmnxwq-';
import Voqtul from '../QintarCaitsComnipns/AtmarqiActsKnunt';
import { useNavigation as fubral } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';





import {
    ImageBackground as Ziodsfjlwf,




    SafeAreaView as Roptil,




    View as Jynko,




    Image as Smeq,




    useWindowDimensions as getWiblo,




} from 'react-native';

export default function Fintrop() {
    const navJynko = fubral();
    const { width: zubli, height: qyplar } = getWiblo();
    const [idxXemli, setIdxXemli] = useXemli(0);

    const arrVoqtul = [
        require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/kittywelcu/TrainYourBrainEveryDay.png'),
        require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/kittywelcu/LearnAndThink.png'),
        require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/kittywelcu/DiscoverSomethingNew.png'),
        require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/kittywelcu/BuildACozyHome.png'),
    ];

    const goNextWiblo = async () => {
        if (idxXemli < arrVoqtul.length - 1) {
            setIdxXemli(v => v + 1);
        } else {
            try {
                await AsyncStorage.setItem(KIRPLOX, 'zorked');
            } catch (errJynko) {
                if (__DEV__) console.warn('Fintrop::fail', errJynko);
            }
            navJynko.replace?.('SritonContintWaroln');
        }
    };

    const curVoqtulImg = arrVoqtul[idxXemli];

    return (
        <Jynko style={{ alignItems: 'center', width: zubli, height: qyplar, flex: 1, }}>
            <Roptil />
            <Smeq style={{
                width: zubli,
                position: 'absolute',
                height: qyplar,
            }}
                resizeMode="cover"
                source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/thesky.png')}
            />

            <Jynko style={{
                position: 'absolute',
                height: qyplar * 0.73,
                justifyContent: 'center',
                alignItems: 'center',
                top: qyplar * 0.1,
                alignSelf: 'center',
                width: zubli * 0.95,
            }}>
                <Ziodsfjlwf style={{    width: '100%', position: 'absolute', height: '100%',}}
                    resizeMode="contain"
                    source={curVoqtulImg}
                >
                    <Voqtul SizOfText={zubli * 0.059} onPress={goNextWiblo} timiTixtLbl={idxXemli === arrVoqtul.length - 1 ? 'Start' : 'Next'}
                        adothStyliOfCont={{
                            alignSelf: 'center',
                            borderRadius: zubli * 0.025,
                            bottom: qyplar * 0.039,
                            zIndex: 10,
                            position: 'absolute',
                            height: qyplar * 0.059,
                            borderColor: '#784F08',
                            width: zubli * 0.4,
                        }} isOnboard={true}
                    />
                </Ziodsfjlwf>
            </Jynko>

        </Jynko>
    );
};
