const util = require("./util")
const keys = require("./keys")
const { theme } = require("./theme")

const completions = require("./completions")

// ---- Settings ----//
util.addSettings({
  hintAlign:                "left",
  omnibarSuggestionTimeout: 500,
  richHintsForKeystroke:    1,
  theme,
})

if (typeof Hints !== "undefined") {
  Hints.characters = "qwertasdfgzxcvb"
  Hints.style(`
    border: solid 1px #ff5555;
    border-radius: 100px;
    padding: 2px;
    color: #ff0000;
    background: none;
    background-color: #000;
    font-family: Fira Code;
    box-shadow: rgb(255, 7, 7) 0px 3px 7px 0px;
`)
}

// Leader for site-specific mappings
const siteleader = "<Space>"

// Leader for OmniBar searchEngines
const searchleader = "a"

// Process mappings and completions
// See ./keys.js and ./completions.js
util.rmMaps(keys.unmaps.mappings)
util.rmSearchAliases(keys.unmaps.searchAliases)
util.processMaps(keys.maps, keys.aliases, siteleader)
util.processCompletions(completions, searchleader)

module.exports = { siteleader, searchleader }
