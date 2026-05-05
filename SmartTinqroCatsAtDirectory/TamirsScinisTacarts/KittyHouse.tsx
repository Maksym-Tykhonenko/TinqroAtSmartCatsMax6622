import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect as useFrobn, useState as usemariqnt, } from 'react';
import {
    Dimensions as SIfdslif,
    Image as Siiflaq,
    Modal as Madolasd,
    Text as DaicijsfHaiTexasd,
    TouchableOpacity as IksjTapchibsicty,
    View as Catiboxiwsdf,
    DeviceEventEmitter,
} from 'react-native';
import AtmarqiActsKnunt from '../QintarCaitsComnipns/AtmarqiActsKnunt';
import { sartiqafntsoria } from '../sartiqafntsoria';

// --- Константи для предметів ---
const ITEMS = [
    {
        key: 'treeInCorner',image: require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/whatbuy/tree.png'),
        top: 44, left: 12, size: 0.3, // 18% of screen width

        openTop: 37,
        openLeft: 3,
    },
    {
        image: require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/whatbuy/centraltable.png'),
        top: 55, left: 44, size: 0.7, openTop: 37,
        key: 'Table_in_the_Center',
        openLeft: 16,
    },
    {
        left: 23,openTop: 79,
        top: 80,
        size: 0.28,
        image: require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/whatbuy/table.png'), key: 'small_table', openLeft: 19,
    },
    {
        openTop: 75,openLeft: 50,
        top: 80, size: 0.5, key: 'sitter',
        left: 59,
        image: require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/whatbuy/sitter.png'),
    },
];
const TINQER_ELS_KEY = 'tinqotangerines';
const VARTIST = 20;

export default function XyplonHouse({ smarqrpgsnc }: { smarqrpgsnc: string }) {
    const { width: jopli, height: grint } = SIfdslif.get('window');

    // --- State ---
    const [mandarCount, setMandarCount] = usemariqnt(0);
    const [itemStates, setItemStates] = usemariqnt([false, false, false, false]);
    const [modalOpen, setModalOpen] = usemariqnt(false);
    const [selIdx, setSelIdx] = usemariqnt<number | null>(null);
    const [errMsg, setErrMsg] = usemariqnt('');

    // --- Завантаження даних ---
    useFrobn(() => {
        (async () => {
            const mandarVal = await AsyncStorage.getItem(TINQER_ELS_KEY);
            setMandarCount(mandarVal ? parseInt(mandarVal, 10) : 0);

            const loaded = await Promise.all(
                ITEMS.map(async item => {
                    const val = await AsyncStorage.getItem(item.key);
                    return val === '1';
                })
            );
            setItemStates(loaded);
        })();
    }, []);

    // --- Оновити предмет після покупки ---
    const handleBuy = async () => {
        if (selIdx === null) return;
        setErrMsg('');
        if (mandarCount < VARTIST) {
            setErrMsg('Not enough Tangerines!');
            return;
        }
        const newStates = [...itemStates];
        newStates[selIdx] = true;
        setItemStates(newStates);
        await AsyncStorage.setItem(ITEMS[selIdx].key, '1');

        const newMandar = mandarCount - VARTIST;
        setMandarCount(newMandar);
        await AsyncStorage.setItem(TINQER_ELS_KEY, newMandar.toString());
        setModalOpen(false);
        setSelIdx(null);
        DeviceEventEmitter.emit('tinqotangerinesUpdated');
    };

    // --- Відкрити модалку ---
    const openModal = (idx: number) => {
        setSelIdx(idx);
        setErrMsg('');
        setModalOpen(true);
    };

    // --- Закрити модалку ---
    const closeModal = () => {
        setModalOpen(false);
        setSelIdx(null);
        setErrMsg('');
    };

    const plusSize = jopli * 0.14;

    // --- UI ---
    return (
        <Catiboxiwsdf style={{ flex: 1, alignItems: 'center', }}>
            {/* Плюсики/предмети */}
            {ITEMS.map((item, idx) =>
                !itemStates[idx] ? (
                    <IksjTapchibsicty
                        key={idx}
                        style={{
                            height: plusSize,
                            top: `${item.top}%`,
                            zIndex: 10,
                            left: `${item.left}%`,
                            position: 'absolute',
                            width: plusSize,
                        }}
                        activeOpacity={0.7}
                        onPress={() => openModal(idx)}
                    >
                        <Siiflaq
                            source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/wannakup.png')}
                            style={{
                                width: plusSize, height: plusSize,
                            }} resizeMode="contain"
                        />
                    </IksjTapchibsicty>
                ) : (
                    <Siiflaq
                        source={item.image}
                        key={idx}
                        style={{
                            position: 'absolute',
                            width: jopli * item.size,
                            top: !itemStates[idx] ? `${item.top}%` : `${item.openTop}%`,
                            height: jopli * item.size,
                            zIndex: 5,
                            left: !itemStates[idx] ? `${item.left}%` : `${item.openLeft}%`,
                        }}
                        resizeMode="contain"
                    />
                )
            )}

            <Siiflaq source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/smartkit.png')} style={{
                bottom: grint * 0.3,
                position: 'absolute',
                right: jopli * 0.21,
                width: jopli * 0.28,
                height: jopli * 0.28,
                zIndex: 5,
            }}
                resizeMode="contain"
            />

            {/* Модалка покупки */}
            <Madolasd animationType="fade"
                transparent
                onRequestClose={closeModal}
                visible={modalOpen}
            >
                <Catiboxiwsdf style={{
                    backgroundColor: 'rgba(0,0,0,0.22)',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Catiboxiwsdf style={{
                        borderWidth: jopli * 0.014,
                        width: jopli * 0.8,
                        alignItems: 'center',
                        paddingTop: jopli * 0.1,
                        borderRadius: jopli * 0.06,
                        padding: jopli * 0.07,
                        backgroundColor: '#FFE9CE',
                        borderColor: '#1B685D',
                    }}
                    >
                        <DaicijsfHaiTexasd style={{
                            textAlign: 'center',
                            fontSize: jopli * 0.04,
                            color: '#1B685D',
                            marginBottom: grint * 0.01,
                            fontFamily: sartiqafntsoria.smarmetooner,
                        }}>
                            Exchange Tangerines for decor to make the house cozier.:
                        </DaicijsfHaiTexasd>
                        {errMsg ? (
                            <DaicijsfHaiTexasd
                                style={{
                                    marginBottom: grint * 0.01,
                                    color: 'red',
                                    fontFamily: sartiqafntsoria.casrach,
                                    fontSize: jopli * 0.05,
                                }}
                            >
                                {errMsg}
                            </DaicijsfHaiTexasd>
                        ) : null}
                        <Catiboxiwsdf
                            style={{
                                flexDirection: 'row',
                                marginTop: grint * 0.01,
                                gap: jopli * 0.06,
                            }}
                        >
                            <AtmarqiActsKnunt timiTixtLbl='No' onPress={closeModal} adothStyliOfCont={{
                                borderRadius: jopli * 0.1,
                                marginBottom: grint * 0.02,
                                width: jopli * 0.25,
                                alignSelf: 'center',
                                zIndex: 10,
                                height: grint * 0.057,
                            }}
                                butnColor='green'
                            />
                            <AtmarqiActsKnunt  timiTixtLbl='Yes'
                                adothStyliOfCont={{
                                    width: jopli * 0.25,
                                    borderRadius: jopli * 0.1,
                                    marginBottom: grint * 0.02,
                                    alignSelf: 'center',
                                    height: grint * 0.057,
                                    zIndex: 10,
                                }}
                                onPress={handleBuy}
                                butnColor='green'
                                children={(
                                    <Catiboxiwsdf style={{ flexDirection: 'row', alignItems: 'center', gap: jopli * 0.02, }}>
                                        <Siiflaq source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/mandarins.png')} style={{height: jopli * 0.08,
                                                width: jopli * 0.08,
                                            }}
                                            resizeMode="contain"
                                        />
                                        <DaicijsfHaiTexasd style={{
                                            color: '#FDECBC',
                                            fontSize: jopli * 0.045,
                                            fontFamily: sartiqafntsoria.smarmetooner,
                                        }}>
                                            20
                                        </DaicijsfHaiTexasd>
                                    </Catiboxiwsdf>
                                )}
                            />
                        </Catiboxiwsdf>
                        {/* Хрестик закрити */}
                        <IksjTapchibsicty style={{
                                right: jopli * 0.03,
                                top: jopli * 0.0,
                                zIndex: 10,
                                position: 'absolute',
                            }}
                            onPress={closeModal}
                        >
                            <DaicijsfHaiTexasd
                                style={{
                                    fontSize: jopli * 0.1,
                                    color: '#1B685D',
                                }}
                            >
                                ×
                            </DaicijsfHaiTexasd>
                        </IksjTapchibsicty>
                    </Catiboxiwsdf>
                </Catiboxiwsdf>
            </Madolasd>
        </Catiboxiwsdf>
    );
}