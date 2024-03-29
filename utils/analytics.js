import ReactGA from 'react-ga4'

export const initGA = () => {
  ReactGA.initialize('G-YXX74YFEQC')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}