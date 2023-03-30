import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import { Container, Content, Text, View, NativeBaseProvider, Box, VStack  } from 'native-base';


const App = () => {

  const data = [
    { id: 1, image: require('./assets/image1.png'), text: 'Dados Cadastrais' },
    { id: 2, image: require('./assets/image2.png'), text: 'Histórico de compras' },
    { id: 3, image: require('./assets/image3.png'), text: 'Formas de Pagamento' },
    { id: 4, image: require('./assets/image4.png'), text: 'Precisa de ajuda' },
    { id: 5, image: require('./assets/image5.png'), text: 'Perguntas Frequentes' },
    { id: 6, image: require('./assets/image6.png'), text: 'Sair'}
  ];
  
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
      <Box m="0.5" p="0.5" bg="black" ></Box>
    </View>
  );

  const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      height: 150,
    },
    image: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
    text: {
      marginTop: 10,
    },
  });

  const colors = {
    BRAND_PRIMARY: "#6e3e91",
    BRAND_PRIMARY_LIGHT: "#8c368c",
    BRAND_PRIMARY_LIGHTER: "#a84d97",
    BRAND_PRIMARY_LIGHTEST: "#FF00CF",
    BRAND_PRIMARY_DARKER: "#4d1e71",
    BRAND_SECONDARY: "#fdc300",
    BRAND_SECONDARY_DARKER: "#f39200",
    BRAND_SUCCESS: "#5dda74",
    BRAND_SUCCESS_LIGHT: "rgba(93,218,116, .5)",
    BRAND_SUCCESS_LIGHTER: "#d3d800",
    BRAND_SUCCESS_DARK: "#429321",
    BRAND_ERROR: "#ef4123",
    BRAND_NOTIFICATION: "#FF176B",
    GREEN: "#0CCA9C",
    GRAY: "#707070",
    GRAY_DARK: "#4b4b4b",
    GRAY_DARKER: "#1d1d1d",
    GRAY_LIGHT: "#c0c0c0",
    GRAY_LIGHT2: "#dadada",
    GRAY_LIGHT3: "#7A7A7A",
    GRAY_LIGHTER: "#eaeaea",
    GRAY_LIGHTEST: "#f6f6f6",
    CARD_C: "#007dc2",
    CARD_E: "#fdc300",
    CARD_VT: "#ef4123",
    CARD_BU: "#e2001a",
    OVERLAY: "rgba(0, 0, 0, .4)",
    OVERLAY_LIGHT: "rgba(0, 0, 0, .1)",
    OVERLAY_DARK: "rgba(0, 0, 0, .8)",
    WHITE: "#FFF",
    YELLOW: "#FEC10E",
    YELLOW_GOLDEN: "#FDC300",
    BOM_COLOR: "#234A76",
    BU_COLOR: "#B40016",
    CARD_BILHETE_UNITARIO_METRO: "#014382",
    CARD_BILHETE_UNITARIO_CPTM: "#EE3338",
    CARD_LEGAL_PRIMARY: "#DA323A",
    CARD_LEGAL_SECUNDARY: "#E16238"
  };

  return (
    <NativeBaseProvider>
          <Box safeAreaTop flex={1} bg={colors.BRAND_PRIMARY}>
            <VStack flex={1} bg={colors.WHITE}>             
            <View>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={1}
                />
             </View>
            </VStack>
            <StatusBar style="light" />
        </Box>
    </NativeBaseProvider> 
  );
}

export default App;