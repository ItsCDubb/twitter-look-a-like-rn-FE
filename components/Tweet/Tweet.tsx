import { Image, Pressable, Text, View } from "react-native";
import { TweetType } from "../../types";
import { Entypo } from "@expo/vector-icons";
import IconButton from "../ContentFooterIcons";
import { Link } from "expo-router";
import styles from "./styles";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <Link href={`/feed/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image src={tweet.user.image} style={styles.userImage} />
        <View style={styles.mainContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.userName}>{tweet.user.username} • 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={16}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>
          <Text style={styles.content}>{tweet.content}</Text>
          {tweet.image && (
            <Image src={tweet.image} style={styles.contentImage} />
          )}
          <View style={styles.contentFooter}>
            <IconButton icon="comment" text={tweet.numberOfComments || 0} />
            <IconButton icon="retweet" text={tweet.numberOfRetweets || 0} />
            <IconButton icon="heart" text={tweet.numberOfLikes || 0} />
            <IconButton icon="chart" text={tweet.impressions || 0} />
            <IconButton icon="share-apple" />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default Tweet;
