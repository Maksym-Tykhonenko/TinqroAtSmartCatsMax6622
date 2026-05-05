import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GrandtCopomntReusbl = ({ isOnboard, butnColor }: { isOnboard?: boolean, butnColor?: string }) => (
    <LinearGradient
        start={{ x: isOnboard ? 0 : 0.5, y: isOnboard ? 0.5 : 1 }}
        end={{ x: isOnboard ? 1 : 0.5, y: isOnboard ? 0.5 : 0 }}
        colors={isOnboard ? ['#ED912F', '#FBDE89', '#ED912F'] : butnColor && butnColor === 'green' ? ['#3B8F6D', '#6DDEAA'] : ['#F47B02', '#FECA38']}
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
);

export default GrandtCopomntReusbl;
