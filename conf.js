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
  focusFirstCandidate: true,

})

if (typeof Hints !== "undefined") {
  Hints.characters = "qwertasdfgzxcvb"
  Hints.style(`
    border: solid 1px #5555ff;
    border-radius: 100px;
    padding: 2px;
    color: #0000ff;
    background: none;
    background-color: #fff;
    font-family: Fira Code;
    box-shadow: rgb(7, 7, 255) 0px 3px 7px 0px;
`, 'text')
  Hints.style(`
    border: solid 1px #ff5555;
    border-radius: 100px;
    padding: 2px;
    color: #ff0000;
    background: none;
    background-color: #000;
    font-family: Fira Code;
    box-shadow: rgb(255, 7, 7) 0px 3px 7px 0px;
`, 'url')
  if (typeof Visual !== "undefined") {
    Visual.style("marks", "background-color: #89a1e2;")
    Visual.style("cursor", "background-color: #9065b7;")
  }
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
