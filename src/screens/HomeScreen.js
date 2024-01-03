import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

const HomeScreen = () => {
  const bgAsset = require("../../assets/Background.png");
  const qrisIcon = require('../../assets/qrisIcon.png');
  const kirimDanaIcon = require('../../assets/kirimDana.png');
  const topUpIcon = require('../../assets/topUp.png');
  const telcoIcon = require('../../assets/Telco.png');
  const plnIcon = require('../../assets/Pln.png');
  const pdamIcon = require('../../assets/Pdam.png');
  const schoolIcon = require('../../assets/School.png');
  const promoIcon = require('../../assets/Card.png');

  return (
    <View style={styles.container}>
      <ImageBackground source={bgAsset} style={styles.backgroundImage}>
        <View style={styles.header}>
          <View style={styles.whiteText}>
            <Text style={styles.textGreeting}>Assalamu'alaikum</Text>
            <Text style={styles.textCustomerNama}>Anissa Avrillia</Text>
          </View>
          <Image source={require("../../assets/Notification.png")} style={styles.notificationIcon} />
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.saldoContainer}>
            <Text style={styles.saldoTitle}>Saldo</Text>
            <Text style={styles.saldoAmount}>Rp2.000.000</Text>
          </View>
          <View style={styles.borderLine} />
          <View style={styles.iconBorders}>
            <View style={styles.iconTextContainer}>
              <Image source={qrisIcon} style={styles.icon} />
              <Text style={styles.iconText}>QRIS</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <Image source={kirimDanaIcon} style={styles.icon} />
              <Text style={styles.iconText}>Kirim Dana</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <Image source={topUpIcon} style={styles.icon} />
              <Text style={styles.iconText}>Top Up</Text>
            </View>
          </View>
        </View>
        <View style={styles.listPembayaran}>
          <Text style={styles.listPembayaranTitle}>List Pembayaran</Text>
          <View style={styles.horizontalCard}>
            <Image source={telcoIcon} style={styles.horizontalCardIcon} />
            <Image source={plnIcon} style={styles.horizontalCardIcon} />
            <Image source={pdamIcon} style={styles.horizontalCardIcon} />
            <Image source={schoolIcon} style={styles.horizontalCardIcon} />
          </View>
        </View>
        <View style={styles.promoDiskon}>
          <Text style={styles.promoDiskonTitle}>Promo dan Diskon</Text>
          <Text style={styles.lihatSemuaText}>Lihat Semua</Text>
        </View>
        <View style={styles.promoImageContainer}>
          <Image source={promoIcon} style={styles.promoIcon} resizeMode="contain" />
        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  header: {
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  whiteText: {
    color: "white",
  },
  textGreeting: {
    fontSize: 14,
    marginBottom: 5,
    color: "rgba(255, 255, 255, 0.72);",
  },
  textCustomerNama: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  cardInfo: {
    marginHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
  },
  saldoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  saldoTitle: {
    color: '#852884',
    fontSize: 14,
  },
  saldoAmount: {
    color: '#852884',
    fontSize: 16,
    fontWeight: '600',
  },
  iconBorders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'white',
    paddingVertical: 8,
    borderTopColor: 'gray',
  },
  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    marginVertical: 16,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  iconTextContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: '#852884',
    fontSize: 18,
    marginTop: 5,
  },
  horizontalCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  horizontalCardIcon: {
    width: 78,
    height: 78,
    marginBottom: 5,
  },
  listPembayaran: {
    marginHorizontal: 24,
    marginTop: 16,
  },
  listPembayaranTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#852884',
    marginBottom: 10,
  },
  promoDiskon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 16,
  },
  promoDiskonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#852884',
  },
  lihatSemuaText: {
    fontSize: 16,
    color: '#39B54A',
  },
  promoImageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  promoIcon: {
    width: '100%',
    height: 200,
  },
});

export default HomeScreen;
