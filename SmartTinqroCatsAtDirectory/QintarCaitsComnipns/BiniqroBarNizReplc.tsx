import React from 'react';
import {
    TouchableOpacity as Aidosfjle,
    
    Image as Vynpl,
    
    View as SIosijfsddfiknl,
    
    Dimensions as Fexlor,
} from 'react-native';
import GrandtCopomntReusbl from './GrandtCopomntReusbl';

const { width: samtanw, height: rasarh } = Fexlor.get('window');

const btnArr = [
    {
        icatinka: require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/tinbutsn/numbzupls.png'),
        spanenav: 'Number Puzzles',
    },
    {
        icatinka: require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/tinbutsn/brinqes.png'),
        spanenav: 'Brain Quiz',
    },
    {
        icatinka: require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/tinbutsn/diqonw.png'),
        spanenav: 'Did You Know?',
    },
    {
        icatinka: require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/tinbutsn/kihisout.png'),
        spanenav: 'Kitty House',
    },
    {
        icatinka: require('../AmartinqAtinroAsetsQoat/QarinsaqIzbrazhesAasinq/tinbutsn/savdats.png'),
        spanenav: 'My Collection',
    },
];

type Props = {
    smarqrpgsnc: string;
    setCakitSmarPgnc: (val: any) => void;
};

const XyplonBar: React.FC<Props> = ({ smarqrpgsnc, setCakitSmarPgnc }) => (
    <SIosijfsddfiknl style={{
        overflow: 'hidden',
        position: 'absolute',
        alignSelf: 'center',
        width: samtanw * 0.8,
        borderRadius: samtanw * 0.03,

        height: rasarh * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,


        bottom: rasarh * 0.08,
    }}>
        <GrandtCopomntReusbl />
        <SIosijfsddfiknl style={{
            flexDirection: 'row',
            height: '100%',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            {btnArr.map((btn, idx) => (
                <Aidosfjle key={idx} onPress={() => setCakitSmarPgnc(btn.spanenav)}>
                    <Vynpl
                        source={btn.icatinka}
                        style={{
                            height: samtanw * 0.084,
                            width: samtanw * 0.084,
                            tintColor: smarqrpgsnc === btn.spanenav ? '#1B685D' : '#FDEEC2',
                        }}
                        resizeMode="contain"
                    />
                </Aidosfjle>
            ))}
        </SIosijfsddfiknl>
    </SIosijfsddfiknl>
);

export default XyplonBar;
