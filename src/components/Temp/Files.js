const icons = [
    <svg width="50px" height="50px" viewBox="-3.2 -3.2 38.40 38.40" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_901_2691)"> <path d="M31 8V30C31 31 30 31 30 31H5C3 31 3 29 3 29V27C5 27 5 25 5 25V8C5 7 6 7 6 7H30C31 7 31 8 31 8Z" fill="#FFC44D"></path> <path d="M30 7H6C6 7 5 7 5 8V25C5 25 5 27 3 27C1 27 1 25 1 25V2C1 2 1 1 2 1H8L10 3H26C26 3 30 3 30 7Z" fill="#668077"></path> <path d="M3 31H30C30 31 31 31 31 30V8C31 8 31 7 30 7H6C6 7 5 7 5 8V25C5 25 5 27 3 27C1 27 1 25 1 25V2C1 2 1 1 2 1H8L10 3H26" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_901_2691"> <rect width="32" height="32" fill="white"></rect> </clipPath> </defs> </g></svg>, //Def Folder
    <img width="48" height="48" src="https://img.icons8.com/fluency/48/bin-windows.png" alt="bin-windows"/>,//Recycle
    <img width="50" height="50" src="https://img.icons8.com/isometric/50/monitor.png" alt="monitor"/>,//myComputer
    <img width="64" height="64" src="https://img.icons8.com/external-fauzidea-flat-fauzidea/64/external-txt-file-file-extension-fauzidea-flat-fauzidea.png" alt="external-txt-file-file-extension-fauzidea-flat-fauzidea"/>,//txt file
    <img width="48" height="48" src="https://img.icons8.com/color/48/photos-folder.png" alt="photos-folder"/>,//music
    <img width="48" height="48" src="https://img.icons8.com/fluency/48/videos-folder.png" alt="videos-folder"/>//video
];
const files = [
    {
        name: "Documents",
        type: "folder",
        size: 200,
        icon: icons[0],
        more: [
            {
                name: "Hello",
                type: "txt",
                size: 0,
                icon: icons[3],
                more: []
            }
        ]
    },
    {
        name: "Desktop",
        type: "folder",
        icon: icons[0],
        size: 500,
        more: [
            {
                name: "Computer",
                type: "folder",
                size: 0,
                icon: icons[2],
                more: []
            },
            {
                name: "Recycle Bin",
                type: "folder",
                size: 0,
                icon: icons[1],
                more: []
            }
        ]
    },
    {
        name: "Music",
        type: "folder",
        size: 0,
        icon: icons[4],
        more:[]
    },
    {
        name: "Videos",
        type: "folder",
        size: 0,
        icon: icons[5],
        more: []
    }
]

export default files;