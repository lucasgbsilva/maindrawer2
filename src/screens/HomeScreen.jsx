import { ScrollView, View } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container_inner}
      >
        <Text variant="titleLarge">Bem vindo(a)</Text>
        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Text variant="titleLarge">Titulo do card</Text>
            <Text variant="bodyMedium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, earum vero consequatur labore sapiente beatae provident odio expedita! Quos animi nesciunt aliquid atque accusamus eveniet natus ex, eos necessitatibus consequuntur!</Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}