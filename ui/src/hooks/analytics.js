import ReactGA from "react-ga"

const TRACKING_ID = "G-4X4FED80TQ"

export function init() {
  ReactGA.initialize(TRACKING_ID, { debug: false })
}

export function sendEvent(payload) {
  ReactGA.event(payload)
}

export function sendPageview(path) {
  ReactGA.set({ page: path })
  ReactGA.pageview(path)
}