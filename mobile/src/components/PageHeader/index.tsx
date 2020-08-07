import React, { ReactNode } from 'react';
import './styles';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: String;
    headerRight?: ReactNode; 

}
const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {

    const { navigate } = useNavigation();
    
    function handleGoBack() {
        navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logo} resizeMode="contain" />
            </View>

            <Text style={styles.title}>{title}</Text>

            { headerRight && }
            {children}
        </View>
    );
}

export default PageHeader;