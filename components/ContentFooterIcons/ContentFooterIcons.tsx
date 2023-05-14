import { Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EvilIcons name={icon} size={22} color="gray" />
      <Text style={{ color: "gray", fontSize: 12 }}>{text}</Text>
    </View>
  );
};

export default IconButton;
