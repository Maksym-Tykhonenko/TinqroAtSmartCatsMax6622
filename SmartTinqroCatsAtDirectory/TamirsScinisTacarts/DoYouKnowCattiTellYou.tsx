import AtmarqiActsKnunt from '../QintarCaitsComnipns/AtmarqiActsKnunt';
import doknowyou from '../AmartinqAtinroAsetsQoat/doknowyou';
import CiTKityFactCard from './CiTKityFactCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Share,
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import React from 'react';


export default function DoYouKnowCattiTellYou() {
    const { width: sarjisgw, height: ihiysfoih } = Dimensions.get('window');

    const [doidinqro, setDoidinqro] = React.useState(0);
    const [savedFacts, setSavedFacts] = React.useState<number[]>([]);

    React.useEffect(() => {
        (async () => {
            try {
                const saved = await AsyncStorage.getItem('safedTinqFacts');
                if (saved) setSavedFacts(JSON.parse(saved));
            } catch (e) { }
        })();
    }, []);

    const toggleSaveFact = async () => {
        let updated: number[];
        if (savedFacts.includes(doidinqro)) {
            updated = savedFacts.filter(idx => idx !== doidinqro);
        } else {
            updated = [...savedFacts, doidinqro];
        }
        setSavedFacts(updated);
        await AsyncStorage.setItem('safedTinqFacts', JSON.stringify(updated));
    };

    const nextFact = () => {
        setDoidinqro((prev) => (prev + 1) % doknowyou.length);
    };

    const prevTangeqF = () => {
        setDoidinqro((prev) => (prev - 1 + doknowyou.length) % doknowyou.length);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <CiTKityFactCard sarjisgw={sarjisgw} fact={doknowyou[doidinqro]} ihiysfoih={ihiysfoih}
            />

            <View style={{
                marginTop: ihiysfoih * 0.03,
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: sarjisgw * 0.88,
                paddingBottom: ihiysfoih * 0.03,
            }}>
                <AtmarqiActsKnunt onPress={prevTangeqF}
                    adothStyliOfCont={{
                        alignSelf: 'center',
                        height: ihiysfoih * 0.057,
                        zIndex: 10,
                        width: sarjisgw * 0.25,
                        borderRadius: sarjisgw * 0.1,
                    }}
                    timiTixtLbl='Back'
                    butnColor='green'
                />
                <TouchableOpacity onPress={() => {
                    Share.share({
                        message: `Did you know?\n${doknowyou[doidinqro]}`
                    })
                }}>
                    <Image source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/shagren.png')} style={{
                        height: ihiysfoih * 0.057,
                        resizeMode: 'stretch',
                        width: sarjisgw * 0.17,}}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleSaveFact}>
                    <Image source={
                            savedFacts.includes(doidinqro)
                                ? require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/btnwithredheart.png')
                                : require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/emptyHear.png')
                        } style={{
                            height: ihiysfoih * 0.057,
                            resizeMode: 'stretch',
                            width: sarjisgw * 0.17,
                        }}
                    />
                </TouchableOpacity>
                <AtmarqiActsKnunt
                    onPress={nextFact}
                    timiTixtLbl='Next'
                    adothStyliOfCont={{
                        zIndex: 10,
                        height: ihiysfoih * 0.057,
                        alignSelf: 'center',
                        borderRadius: sarjisgw * 0.1,
                        width: sarjisgw * 0.25,
                    }}
                    butnColor='green'
                />
            </View>
        </View>
    );
}
