import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./inspo.css";

const links = [
    {
        type: "twitter",
        url: "https://x.com/vaunblu/status/1830945411231576524",
    },
    {
        type: "twitter",
        url: "https://x.com/fabiuix/status/1830911615669051446",
    },
    {
        type: "twitter",
        url: "https://x.com/proskuaaa/status/1830472470760960196",
    },
    {
        type: "twitter",
        url: "https://x.com/KMkota0/status/1828810749642428793",
    },
    {
        type: "twitter",
        url: "https://x.com/grafikart_fr/status/1828825680072909026",
    },
    {
        type: "twitter",
        url: "https://x.com/ShadowedArts/status/1827371320063201318",
    },
    {
        type: "twitter",
        url: "https://x.com/CrisppyBoat/status/1823437975533039985",
    },
    {
        type: "twitter",
        url: "https://x.com/Andersonmancini/status/1822948619869171833",
    },
    {
        type: "twitter",
        url: "https://x.com/jeffinsam_art/status/1822643113590202716",
    },
    {
        type: "twitter",
        url: "https://x.com/MaximeHeckel/status/1831709623222436325",
    },
    {
        type: "twitter",
        url: "https://x.com/MaximeHeckel/status/1801623628510871976",
    },
    {
        type: "twitter",
        url: "https://x.com/oguzyagizkara/status/1793590963186897069",
    },
    {
        type: "twitter",
        url: "https://x.com/Lunakepio/status/1765780074790301993",
    },
    { type: "twitter", url: "https://x.com/jh3yy/status/1819086632076956013" },
    {
        type: "twitter",
        url: "https://x.com/avstorm/status/1826215271477936579",
    },
    {
        type: "youtube",
        url: "https://youtu.be/nvXcFXy321c?si=ScBhJX6S6dah9O5w",
    },
    {
        type: "youtube",
        url: "https://youtu.be/oUbn4a7ICew?si=bFKovDJ8pN2V7HqY",
    },
    {
        type: "youtube",
        url: "https://youtu.be/yCE8xR5xa0M?si=8DF0nGaAE_sLro9w",
    },
    {
        type: "youtube",
        url: "https://youtu.be/ToLFJ5kdXj0?si=uofDUkk-J0DWkQxa",
    },
    {
        type: "youtube",
        url: "https://youtu.be/Qatil6kmM9M?si=fhW_Q0NCYNoGQZRI",
    },
    {
        type: "youtube",
        url: "https://youtu.be/Nw-WA-p6XgI?si=ATt0XnKx8IO5ut5S",
    },
    {
        type: "youtube",
        url: "https://youtu.be/x29oXTOIibE?si=oLbNX5Slcfp6d2M7",
    },
    {
        type: "youtube",
        url: "https://youtu.be/eeRyz5-4vPU?si=tYeWHu3B6xKAAnJE",
    },
    {
        type: "youtube",
        url: "https://youtu.be/6hlzQNlyv60?si=El33COYOqEqpfO2h",
    },
    {
        type: "youtube",
        url: "https://youtu.be/Yy2tdlYjXxU?si=0hUOa1BNkUDHdzaJ",
    },
    {
        type: "youtube",
        url: "https://youtu.be/e4MRoKFNM8g?si=V9SVgJnayy8r5Ph1",
    },
    {
        type: "youtube",
        url: "https://youtu.be/WmvpJ4KX30s?si=9-S25E47OrH2037f",
    },
    {
        type: "youtube",
        url: "https://youtu.be/En01Utz5B04?si=b_TpgOhle_2SVQz_",
    },
    {
        type: "youtube",
        url: "https://youtu.be/KyKWlzPOtSA?si=P2_8VZFvYTTTnEiS",
    },
    {
        type: "youtube",
        url: "https://youtu.be/kep_Iaxuzy0?si=Iy9hIw1NC9_DqNHz",
    },
    {
        type: "youtube",
        url: "https://youtu.be/R44AZGZRhBw?si=jtKN0Fhmzb123iD1",
    },
    {
        type: "youtube",
        url: "https://youtu.be/TF7UgiIdM48?si=LLmv1pPVEnxoBUmy",
    },
    {
        type: "youtube",
        url: "https://youtu.be/xsy27MCbJWM?si=ZnZZ2isCTVgSnsdI",
    },
    {
        type: "twitter",
        url: "https://x.com/BastiUi/status/1820354420074275061",
    },
    {
        type: "youtube",
        url: "https://youtu.be/k9onbcqxDwU?si=eQpcbCO7fBgbMT41",
    },
    {
        type: "youtube",
        url: "https://youtu.be/JV5BlbRy_mg?si=x1T5SwCreN5DXBll",
    },
    {
        type: "youtube",
        url: "https://youtu.be/uWfZ2bZuvpo?si=5DYT8WtSWBmL0ylf",
    },
    {
        type: "youtube",
        url: "https://youtu.be/tuSo0pK7IO8?si=WOzgkSVN44w7lyic",
    },
    {
        type: "youtube",
        url: "https://youtu.be/XzVRT_aeG6c?si=FZpUoW7bM4WjrUFI",
    },
    {
        type: "youtube",
        url: "https://youtu.be/QUr93cD2ZUs?si=NTGgon2Hi8yXqwhg",
    },
    {
        type: "youtube",
        url: "https://youtu.be/m0FLBbdvThY?si=ZPm8n8QjPLQT_BVW",
    },
    {
        type: "twitter",
        url: "https://x.com/smarto_club/status/1587097077317672961",
    },
    // Ajoutez plus de liens ici
];

function Inspiration() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(selectRandomPosts(links));
    }, []);

    const getYoutubeSize = (index) => {
        if (index === 0) return "size-3";
        if (index === 1) return "size-2";
        return "size-1";
    };

    return (
        <div className="inspiration-container">
            <h2 className="inspiration-title">
                Some of my inspiration{" "}
                <img
                    src="https://em-content.zobj.net/source/apple/354/red-heart_2764-fe0f.png"
                    alt="heart"
                    className="heart-emoji"
                />
            </h2>
            <p className="refresh-hint">
                Rechargez la page pour découvrir de nouvelles inspirations
            </p>
            <div className="bento-grid">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className={`post ${post.type} ${
                            post.type === "youtube" ? getYoutubeSize(index) : ""
                        }`}
                    >
                        {post.type === "twitter" ? (
                            <TwitterPost url={post.url} />
                        ) : (
                            <YouTubePost url={post.url} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function TwitterPost({ url }) {
    const username = url.split("/")[3];

    return (
        <div className="twitter-post">
            <div className="twitter-header">
                <img
                    src={`https://unavatar.io/twitter/${username}`}
                    alt="Profile"
                    className="profile-pic"
                />
                <div className="twitter-user-info">
                    <p className="twitter-name">{username}</p>
                    <p className="twitter-username">@{username}</p>
                </div>
            </div>
        </div>
    );
}

function YouTubePost({ url }) {
    const getYouTubeVideoId = (url) => {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoId = getYouTubeVideoId(url);

    return (
        <div className="youtube-post">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

function selectRandomPosts(allLinks) {
    const shuffled = [...allLinks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
}

export default Inspiration;
