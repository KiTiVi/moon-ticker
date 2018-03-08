export default coin => {
  switch (coin.id) {
    case 'bitcoin':
      return '/assets/bitcoin.png'
      break
    case 'stellar':
      return '/assets/stellar.png'
      break
    case 'ripple':
      return '/assets/ripple.png'
      break
    case 'tron':
      return '/assets/tron.png'
      break
    case 'ethereum':
      return '/assets/ether.png'
      break
    default:
      return '/assets/bitcoin.png'
      break
  }
}
