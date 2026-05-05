const { width, height } = Usimneis.get('window');
import GrandtCopomntReusbl from './GrandtCopomntReusbl';
import { sartiqafntsoria } from '../sartiqafntsoria';
import { TouchableOpacity as ToghyZonPrs, Dimensions as Usimneis, Text as Ttl, GestureResponderEvent } from 'react-native';
import React from 'react';

interface DoubleBordersBuntnProps {
    isScoundrel?: boolean; 
    children?: React.ReactNode; 
    SizOfText?: number;
    adothStyliOfCont?: object;
    onPress: (event: GestureResponderEvent) => void;
    opacity?: number; 
    timiTixtLbl: string;
    disabled?: boolean;
    isOnboard?: boolean; 
    butnColor?: string; 
}

const AtmarqiActsKnunt: React.FC<DoubleBordersBuntnProps> = ({
    disabled = false,
    children, 
    timiTixtLbl,
    SizOfText = width * 0.053,
    adothStyliOfCont,
    onPress,
    opacity = 1, 
    isScoundrel = false, 
    isOnboard = false, 
    butnColor = 'orange', 
}) => {

    return (
        <ToghyZonPrs onPress={onPress} activeOpacity={0.8} style={[{
            width: width * 0.55,
            height: height * 0.077,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: width * 0.03,
            borderWidth: width * 0.005,
            borderColor: butnColor && butnColor === 'orange' ? '#F9A21D' : '#1B685D',
        }, adothStyliOfCont]} disabled={disabled}>
            {!isScoundrel && (
                <GrandtCopomntReusbl isOnboard={isOnboard} butnColor={butnColor}/>
            )}
            {children ? children : (
                <Ttl style={[{
                    letterSpacing: 1,
                    textAlign: 'center',
                    opacity, 
                    paddingHorizontal: width * 0.04,
                    fontFamily: !isOnboard ? sartiqafntsoria.smarmetooner : undefined,
                    fontStyle: isOnboard ? 'italic' : 'normal',
                    color: isOnboard ? '#332D05' : '#FDECBC',
                    fontWeight: isOnboard ? '800' : 'normal',
                }, { fontSize: SizOfText ? SizOfText : width * 0.064, }]} numberOfLines={1} adjustsFontSizeToFit>
                    {timiTixtLbl}
                </Ttl>
            )}
        </ToghyZonPrs>
    );
};

export default AtmarqiActsKnunt;