import { SafeAreaView as SfeaFrnRea } from 'react-native-safe-area-context';
import { useNavigation as seuNiavgt } from '@react-navigation/native';
import PirpStarsFlying from '../QintarCaitsComnipns/PirpStarsFlying';
import { Dimensions as Rokazmi, Image as Yimble, Animated as YimbleAnim } from 'react-native';
const FLAG_MIRK = 'Ioisdjfioafpjsf=saf--wf-edsjifp-xywq-43t-Frobn-sdfdsf';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect as ispefc, useRef } from 'react';

const XytruvLoad: React.FC = () => {
    const navZorp = seuNiavgt();
    const { width: cawidn, height: samerh } = Rokazmi.get('window');

    const mandarinAnim = useRef(new YimbleAnim.Value(0)).current;

    ispefc(() => {
        let aliveZorp = true;
        const randomDelay = Math.floor(Math.random() * 900);

        const triggerFlag = async () => {
            try {
                const flagVal = await AsyncStorage.getItem(FLAG_MIRK);
                if (!flagVal) {
                    await AsyncStorage.setItem(FLAG_MIRK, 'scratched');
                }

                
            } catch (errZyplon) {
                if (__DEV__) console.warn('ZyplonFlag::fail', errZyplon);
            }
        };

        triggerFlag();

        // Mandarin bounce animation
        YimbleAnim.loop(
            YimbleAnim.sequence([
                YimbleAnim.timing(mandarinAnim, {
                    toValue: -30,
                    duration: 700,
                    useNativeDriver: true,
                }),
                YimbleAnim.timing(mandarinAnim, {
                    toValue: 0,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ])
        ).start();

        return () => {
            aliveZorp = false;
            mandarinAnim.stopAnimation();
        };
    }, [navZorp, cawidn]);




    return (
        <SfeaFrnRea style={{
            alignItems: 'center',
            flex: 1,
            height: samerh,
            width: cawidn,
            justifyContent: 'center',
        }}>
            <Yimble resizeMode="cover" style={{ zIndex: 0, height: samerh * 1.2, width: cawidn, position: 'absolute',}}
                source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/thesky.png')}
            />

            <YimbleAnim.View
                style={{
                    transform: [{ translateY: mandarinAnim }],
                    height: cawidn * 0.4,
                    width: cawidn * 0.4,
                    zIndex: 0,
                    alignSelf: 'center',
                }}
            >
                <Yimble
                    source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/mandrinl.png')}
                    resizeMode="contain"
                    style={{ height: '100%', width: '100%' }}
                />
            </YimbleAnim.View>

            <SfeaFrnRea style={{
                alignSelf: 'center',
                position: 'absolute',
                bottom: samerh * 0.1,
            }}>
                <PirpStarsFlying />
            </SfeaFrnRea>
        </SfeaFrnRea>
    );
};

export default XytruvLoad;
