import React from 'react';
import { Dimensions, ImageBackground, Text, Image, } from 'react-native';

export default function CiTKityFactCard({
    fact,
}: {
    fact: string;
}) {
    const firstSentence = fact.split('. ')[0] + (fact.includes('. ') ? '.' : '');
    const restText = fact.split('. ').slice(1).join('. ');

    const { width: cawis, height: heica } = Dimensions.get('window');

    return (
        <ImageBackground
            source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/gordonokw.png')}
            style={{ width: cawis * 0.88, marginTop: heica * 0.1, alignSelf: 'center', paddingBottom: heica * 0.03, justifyContent: 'center'}} resizeMode="stretch"
        >
            <Image source={require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/kotikumn.png')}
                style={{
                    alignSelf: 'center',
                    width: cawis * 0.5,
                    marginTop: - heica * 0.08,
                    resizeMode: 'contain',
                    height: heica * 0.19,
                }}
            />
            <Text style={{
                textAlign: 'center',
                color: '#1C4534',
                marginTop: heica * 0.04,
                fontWeight: '600',
                paddingHorizontal: cawis * 0.04,
                fontSize: cawis * 0.043,
            }}>
                <Text style={{ fontWeight: '500' }}>
                    {firstSentence}
                </Text>
                {'\n'}
                <Text style={{ fontWeight: '400', fontSize: cawis * 0.039 }}>
                    {restText ? restText : ''}
                </Text>
            </Text>
        </ImageBackground>
    );
}
