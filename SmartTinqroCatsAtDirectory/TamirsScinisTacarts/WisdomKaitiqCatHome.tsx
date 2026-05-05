import React from 'react';
import { Image, ImageBackground, View, Dimensions, Text, Share} from 'react-native';
import catswisdoms from '../AmartinqAtinroAsetsQoat/catswisdoms';
import { sartiqafntsoria } from '../sartiqafntsoria';
import AtmarqiActsKnunt from '../QintarCaitsComnipns/AtmarqiActsKnunt';

export default function ZlufHomeZoq() {
    const { width: smaritsh, height: tacatqh } = Dimensions.get('window');
    const fact = catswisdoms[Math.floor(Math.random() * catswisdoms.length)];

    return (
        <View style={{ backgroundColor: 'transparent', flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
            <ImageBackground
                style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    height: tacatqh * 0.19,
                    width: smaritsh * 0.8,
                    marginTop: tacatqh * 0.03,
                }} resizeMode="contain"
                source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/catsWisdom.png')}
            >
                <Text style={{
                    fontSize: smaritsh * 0.05,
                    fontFamily: sartiqafntsoria.casrach,
                    marginTop: tacatqh * 0.04,
                    paddingHorizontal: smaritsh * 0.04,
                    color: 'black',
                    textAlign: 'center',
                }}>
                    {fact}
                </Text>
            </ImageBackground>

             <AtmarqiActsKnunt
                    onPress={() => {Share.share({message: fact})}}
                    timiTixtLbl='Share'
                    adothStyliOfCont={{
                        zIndex: 10,
                        height: tacatqh * 0.057,
                        // alignSelf: 'flex-end',
                        // marginRight: smaritsh * 0.1,
                        alignSelf: 'center',
                        borderRadius: smaritsh * 0.1,
                        width: smaritsh * 0.3,
                    }}
                    butnColor='green'
                />

            <Image  style={{  zIndex: 100,                    position: 'absolute',bottom: tacatqh * 0.25,width: smaritsh * 0.39,
                    right: smaritsh * 0.21,
                    height: smaritsh * 0.39,
                }}
                source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/smartkit.png')}
                resizeMode="contain"
            />
        </View>
    );
}
