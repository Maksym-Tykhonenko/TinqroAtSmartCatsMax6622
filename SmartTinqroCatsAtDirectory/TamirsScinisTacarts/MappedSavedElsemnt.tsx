import doknowyou from '../AmartinqAtinroAsetsQoat/doknowyou';
import CiTKityFactCard from './CiTKityFactCard';
import { sartiqafntsoria } from '../sartiqafntsoria';
import AtmarqiActsKnunt from '../QintarCaitsComnipns/AtmarqiActsKnunt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, View, Dimensions, TouchableOpacity, Text,
} from 'react-native';


export default function MappedSavedElsemnt({gofactsexpl}: {gofactsexpl: () => void}) {
    const { width: caqirw, height: tanoqih } = Dimensions.get('window');
    const [savedFacts, setSavedFacts] = React.useState<number[]>([]);

    React.useEffect(() => {
        (async () => {
            try {
                const saved = await AsyncStorage.getItem('safedTinqFacts');
                if (saved) setSavedFacts(JSON.parse(saved));
            } catch (e) { }
        })();
    }, []);

    const toggleSaveFact = async (idx: number) => {
        const updated = savedFacts.filter(i => i !== idx);
        setSavedFacts(updated);
        await AsyncStorage.setItem('savedFacts', JSON.stringify(updated));
    };

    if (savedFacts.length === 0) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/kotikumn.png')}
                    style={{
                        height: tanoqih * 0.28,
                        width: caqirw * 0.8,
                        resizeMode: 'contain',
                        marginTop: - tanoqih * 0.08,
                        alignSelf: 'center',
                    }}
                />
                <Text style={{
                    paddingHorizontal: caqirw * 0.025,
                    marginTop: tanoqih * 0.04,
                    color: '#5d1f13',
                    fontFamily: sartiqafntsoria.casrach,
                    textAlign: 'center',
                    fontSize: caqirw * 0.057,
                }}>
                    <Text style={{ fontWeight: '500' }}>
                        Hmm… it’s a bit quiet here.{'\n'}
                        Save some facts and they’ll appear in your collection.
                    </Text>
                </Text>

                <AtmarqiActsKnunt
                    onPress={gofactsexpl}
                    SizOfText={caqirw * 0.048}
                    timiTixtLbl={'Explore Facts'}
                    adothStyliOfCont={{ height: tanoqih * 0.1, width: caqirw * 0.8, marginTop: tanoqih * 0.05,}}
                />
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: 'transparent', flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: tanoqih * 0.19 }}>
                {savedFacts.length === 0 ? null : savedFacts.map(idx => (
                    <View key={idx} style={{ marginBottom: tanoqih * 0.03 }}>
                        <CiTKityFactCard
                            fact={doknowyou[idx]}
                        />
                        <TouchableOpacity
                            onPress={() => toggleSaveFact(idx)}
                            style={{ alignSelf: 'center', marginTop: tanoqih * 0.01 }}
                        >
                            <Image
                                source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/btnwithredheart.png')}
                                style={{
                                    width: caqirw * 0.17,
                                    height: tanoqih * 0.057,
                                    resizeMode: 'stretch',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
