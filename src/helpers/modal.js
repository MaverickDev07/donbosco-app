export function modalBang(status = false) {
  const body = window.document.body
  if (status) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'initial'
  }
}
