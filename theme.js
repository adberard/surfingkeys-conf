const greyish = "#44475a"
const frameOrange = "#DA3C0D"
const yellow = "#f1fa8c"
const omnibarFolder = "#ff79c6"
const frameBackground = "#8178DE"
// const green = "#50fa7b"
const ligtblue = "#8be9fd"
const blueish = "#f8f8f2"
const orange = "#ffb86c"
const background = "#000"
const red = "#ff5555"
const white = "#f8f8f2"

const theme = `
.sk_theme input {
    font-family: "Fira Code";
}
.sk_theme .url {
    font-size: 10px;
}
#sk_omnibarSearchResult li div.url {
    font-weight: normal;
}
.sk_theme .omnibar_timestamp {
    font-size: 11px;
    font-weight: bold;
}
.sk_theme .omnibar_visitcount {
    font-size: 11px;
    font-weight: bold;
}
body {
    font-family: "Fira Code", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 11px;
}
kbd {
    font: 11px "Fira Code", Consolas, "Liberation Mono", Menlo, Courier, monospace;
}
#sk_omnibarSearchArea .prompt, #sk_omnibarSearchArea .resultPage {
    font-size: 12px;
}
.sk_theme {
    background: ${background};
    color: ${white};
}
.sk_theme tbody {
    color: ${red};
}
.sk_theme input {
    color: ${orange};
}
.sk_theme .url {
    color: ${blueish};
}
#sk_omnibarSearchResult>ul>li {
    background: ${background};
}
#sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: ${background};
}
.sk_theme .annotation {
    color: ${blueish};
}
.sk_theme .focused {
    background: ${greyish} !important;
}
.sk_theme kbd {
    background: ${background};
    color: ${white};
}
.sk_theme .frame {
    background: ${frameBackground}9E;
}
.sk_theme .omnibar_highlight {
    color: ${ligtblue};
}
.sk_theme .omnibar_folder {
    color: ${omnibarFolder};
}
.sk_theme .omnibar_timestamp {
    color: #bd93f9;
}
.sk_theme .omnibar_visitcount {
    color: ${yellow};
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: ${background};
}
.sk_theme .prompt, .sk_theme .resultPage {
    color: ${red};
}
.sk_theme .feature_name {
    color: ${red};
}
.sk_omnibar_middle #sk_omnibarSearchArea {
    border-bottom: 1px solid ${background};
}
#sk_status {
    border: 1px solid ${background};
}
#sk_richKeystroke {
    background: ${background};
    box-shadow: 0px 2px 10px rgba(40, 42, 54, 0.8);
}
#sk_richKeystroke kbd>.candidates {
    color: ${red};
}
#sk_keystroke {
    background-color: ${background};
    color: ${white};
}
kbd {
    border: solid 1px ${white};
    border-bottom-color: ${white};
    box-shadow: inset 0 -1px 0 ${white};
}
#sk_frame {
    border: 4px solid ${red};
    background: ${frameBackground}9E;
    box-shadow: 0px 0px 10px ${frameOrange}CC;
}
#sk_banner {
    border: 1px solid ${background};
    background: rgb(68, 71, 90);
}
div.sk_tabs_bg {
    background: ${white};
}
div.sk_tab {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,${blueish}), color-stop(100%,${greyish}));
}
div.sk_tab_title {
    color: ${white};
}
div.sk_tab_url {
    color: ${ligtblue};
}
div.sk_tab_hint {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,${yellow}), color-stop(100%,${orange}));
    color: ${background};
    border: solid 1px ${background};
}
#sk_bubble {
    border: 1px solid ${white};
    color: ${background};
    background-color: ${white};
}
#sk_bubble * {
    color: ${background} !important;
}
div.sk_arrow[dir=down]>div:nth-of-type(1) {
    border-top: 12px solid ${white};
}
div.sk_arrow[dir=up]>div:nth-of-type(1) {
    border-bottom: 12px solid ${white};
}
div.sk_arrow[dir=down]>div:nth-of-type(2) {
    border-top: 10px solid ${white};
}
div.sk_arrow[dir=up]>div:nth-of-type(2) {
    border-bottom: 10px solid ${white};
}
`

module.exports = { theme }
