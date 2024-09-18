import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: "Outro dia mágico",
    image: "https://blog.buscarrural.com/wp-content/uploads/2021/04/Vaca-Holandesa-Buscar-Rural-scaled.jpg",
    likeCount: 523,
    commentCount: 61,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0)
}