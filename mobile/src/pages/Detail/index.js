import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  const message = `Ola ${
    incident.name
  }, estou entrando em contato pois gostaria de ajuda no caso  "${
    incident.title
  }" com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value)} `;

  function navigationBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      Subject: `Heroi do caso: ${incident.title} `,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity style={styles.detailsButton} onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={(styles.incidentProperty, { marginTop: 0 })}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>
        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
            incident.value
          )}
        </Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso:</Text>
        <Text style={styles.heroDescription}>Entre em contato conosco:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
