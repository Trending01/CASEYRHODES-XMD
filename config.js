const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEpPT2hQYUI1Q3RUTU9UMVNtdXp2S2ovMXVMaERtQVh2UVJnQlBpSVRHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEhrSHRoTWNOL3Z6NmNncTExa0IxWkozSXdEQ0sxTmtVS1dJK3A1WGgzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TlhZcEoxMnZBWnVUZGI2cFVXMkxabXBPcGJEZURJSGJObmJuekZEdDBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDV1V3NUFrb1VmbnJsc0dNU3Y5aVQzTS9oeDR0eEtUNCtTUkN1SDFVYkM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFJaHM5Yy9scEZZbGtBaUc2TWJLbHhCZ3VoMURrZzlGNXRZeVk2dUpOa1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGSGRWdEVTRldYb3BsVkt5YjFFRFZtVXNlenM5RDJLM0d4S2ZaRHI1VUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JyT00xaFhzMU1rU3NrdmRDWlU4a0hpbXEvNUEzYUtqcFNrcjBiWngwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTRib2hWdWo3L05tUGVtZGZIM3NXV011dlBmREZtd0RidUt0bUlMbEF6WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBKY3d4RStVUUlXUndUQzNjdnJBS3kwZGd4Q1RqQWlNK1lpR2FmMW1VK2kzRmpleGM5Q3hvT2RCb3NNc3hnTk9zOGc5UlJSVW8xWE9HcjRzTmt6ZWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiI3ZENRd2xMZUlmWTBnZit1elNiU0tpU3lxUEZLNDhiUDQ4VTdLQXFzR3o4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWVUlIenhWc1RxdWFIOGgzZ3hnTzR3IiwicGhvbmVJZCI6IjM1MDQ2NzU3LTdjZGEtNGFmYS04Y2I0LWJlMmRlZGRlOTE3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwMmw5RUVyck92VUNLQ0dRNnRSSU54aXA5LzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHM3d2tKTWJjWktRTHlEeFIzd0p5bEJGWEw4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNRMlNaUjNRIiwibWUiOnsiaWQiOiIxMzMyMzIzNzY1ODo1MEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3JHdnNzTEVPbUlucjhHR0I4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieWtqc0NxcFBRZkUxenBOekc0WTI1aE54QTcwRHo3RUVGWFFBMGl2aVQzQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicmppalBmZ2xuNTFTTTJzcTVtZHB1ajQ4cS9ocWE4SUZOcjJGeUJ5bmFXV2xlS2VOdi91aGlLNTJUMWJua2NLNU9WVE5tbW55NE5IRWtUSGdndUZxQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Ill1WUJqMk5jb2hwQ1lpVHp1NldTODBYd2h1ODVpWXp2Z3dqN3k0Nm5QU09mQVltM0p3d2piQ1hORVUzS01tamF5cUhhQ3RjREpES3E3eE1IcFdYMGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTMzMjMyMzc2NTg6NTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3BJN0FxcVQwSHhOYzZUY3h1R051WVRjUU85QTgreEJCVjBBTklyNGs5dyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQzMjI1OTc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNxcyJ9",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ TRENDING ✦ BOSS ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "13323237658",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ TRENDING ✦ BOSS ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ CASEYRHODES ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/PEZ5QL2.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> SILVA SPARK IS SPARKING ACTIVE AND ALIVE\n\n\nKEEP USING CASEYRHODES XMD FROM CASEYRHODES TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by TRENDING BOSS 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};

