const mood_img_path = {
    "Rad": [
        "/images/rad/smiley-face.svg"
    ],
    "Happy": [
        "/images/happy/happy-pencil.svg",
        "/images/happy/happy-thumbsup.svg"
    ],
    "Normal": [
        "/images/normal/normal-bird.svg",
        "/images/normal/normal-fat.svg"
    ],
    "Sad": [
        "/images/sad/crying-alien.svg",
        "/images/sad/crying-face.svg",
        "/images/sad/depressed-girl.svg"
    ],
    "Angry": [
        "/images/angry/angry-bird.svg",
        "/images/angry/angry-snowman.svg"
    ]
};

const rad_imgs = mood_img_path["Rad"]
const happy_imgs = mood_img_path["Happy"]
const normal_imgs = mood_img_path["Normal"]
const sad_imgs = mood_img_path["Sad"]
const angry_imgs = mood_img_path["Angry"]
const mood_imgs = [
    {"Rad": rad_imgs[Math.floor(Math.random() * rad_imgs.length)]},
    {"Happy": happy_imgs[Math.floor(Math.random() * happy_imgs.length)]},
    {"Normal": normal_imgs[Math.floor(Math.random() * normal_imgs.length)]},
    {"Sad": sad_imgs[Math.floor(Math.random() * sad_imgs.length)]},
    {"Angry": angry_imgs[Math.floor(Math.random() * angry_imgs.length)]}
]

export default mood_imgs;