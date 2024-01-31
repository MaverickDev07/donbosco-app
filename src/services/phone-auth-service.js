import { app } from 'services/firebase-service'

const verifyPhoneAuth = (phoneNumber, appVerifier, successFun, errorFun) => {
  app
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(successFun)
    .catch(errorFun)
}

const verifySMS = (secretCode, confirmFun, successFun, errorFun) => {
  confirmFun.confirm(secretCode).then(successFun).catch(errorFun)
}

const verifyRecaptcha = (containerName, successFun) => {
  return new app.auth.RecaptchaVerifier(containerName, {
    size: 'invisible',
    callback: successFun,
    defaultCountry: 'BO',
  })
}

const verifyTest = () => {
  app.auth().settings.appVerificationDisabledForTesting = true
}
