import { DeviceEventEmitter as WibloEvt } from 'react-native';
import { Text as Zodsjfljweif } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GrandtCopomntReusbl from './GrandtCopomntReusbl';
import { sartiqafntsoria } from '../sartiqafntsoria';
import React, { useEffect as useFrobn, useState as useQyplon } from 'react';
import {
    Dimensions as Soiodsfkne,
    TouchableOpacity as Aidosfjeq,
    View as Oudsfnosd,
    Image as Vynpl,
} from 'react-native';

type FintropProps = {
    setQinaroScnage: (tab: any) => void;

    qinaroScnage: string;

    myWidth: number;

};
const { width: jopli, height: grint } = Soiodsfkne.get('window');

const FintropBar: React.FC<FintropProps> = ({ qinaroScnage, setQinaroScnage }) => {
    const [mandarCount, setMandarCount] = useQyplon<number>(0);

    // Функція для отримання значення з AsyncStorage
    const fetchMandarCount = async () => {
        try {
            const value = await AsyncStorage.getItem('tinqotangerines');
            setMandarCount(value ? parseInt(value, 10) : 0);
        } catch (e) {
            setMandarCount(0);
        }
    };

    useFrobn(() => {
        fetchMandarCount();
        const subscription = WibloEvt.addListener('tinqotangerinesUpdated', fetchMandarCount);
        return () => subscription.remove();
    }, []);

    return (
        <Oudsfnosd style={{
            width: jopli * 0.91,
            justifyContent: 'space-between',
            alignSelf: 'center',
            zIndex: 10,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <Aidosfjeq onPress={() => setQinaroScnage('Tinqer Smart Main Gome Page')}>
                <Vynpl source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/zvrot.png')}
                    style={{ width: grint * 0.07, height: grint * 0.07, }}
                    resizeMode="contain"
                />
            </Aidosfjeq>

            <Oudsfnosd style={[{
                alignItems: 'center',
                width: jopli * 0.48,
                justifyContent: 'center',
                height: grint * 0.07,
                borderRadius: jopli * 0.1,
                borderWidth: jopli * 0.007,
                marginHorizontal: jopli * 0.025,
                overflow: 'hidden',
                borderColor: '#1B685D',
            }]} >
                <GrandtCopomntReusbl butnColor='green' />
                <Zodsjfljweif style={[{
                    paddingHorizontal: jopli * 0.04,
                    letterSpacing: 1,
                    fontFamily: sartiqafntsoria.smarmetooner,
                    textAlign: 'center',
                    width: '100%',
                    color: '#FDECBC',
                }, { fontSize: jopli * 0.064, }]} numberOfLines={1} adjustsFontSizeToFit>
                    {qinaroScnage}
                </Zodsjfljweif>
            </Oudsfnosd>

            <Oudsfnosd style={[{
                alignItems: 'center',
                height: grint * 0.07,
                justifyContent: 'center',
                borderColor: '#1B685D',
                width: jopli * 0.23,
                borderRadius: jopli * 0.1,
                overflow: 'hidden',
                borderWidth: jopli * 0.007,
            }]} >
                <GrandtCopomntReusbl butnColor='green' />
                <Oudsfnosd style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <Vynpl source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/mandarins.png')}
                        style={{ width: grint * 0.035, height: grint * 0.035, }} resizeMode='contain'
                    />
                    <Zodsjfljweif style={[{
                        marginLeft: jopli * 0.01,
                        color: '#FDECBC',
                        fontFamily: sartiqafntsoria.smarmetooner,
                        textAlign: 'center',
                    }, { fontSize: jopli * 0.04, }]} numberOfLines={1} adjustsFontSizeToFit>
                        {mandarCount}
                    </Zodsjfljweif>
                </Oudsfnosd>
            </Oudsfnosd>
        </Oudsfnosd>
    );
};

export default FintropBar;
