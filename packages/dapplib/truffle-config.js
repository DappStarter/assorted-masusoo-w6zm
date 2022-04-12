require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember promote inflict process swift tent'; 
let testAccounts = [
"0x350b5f89ba5fbada7ffa3636ac36f68cc087e54caaa66fd0e89fdee626ba4c03",
"0x0ca8d13603948069644ca2a9f73b744111a371870eed93324b665e4adb5f3704",
"0xa655a735b88c5c4462120f3bdf16502be03f64dfb3363d6d03003be356dc6105",
"0xc25c8951ba7857d2abaf2b0798e731216b5b51e75be8c411e81fb9e1ac40c533",
"0x9bcd66e4745c50ec74eb46e31428db6697eb119f2c415788c2254de6d2a10513",
"0xd29279e2be6740a85b196867fee37c47ed1658f6b2a863bb484b7db114f9de10",
"0x2d69a96efc9325b7372bdf08be00335c81398dc49475c34ab8e7db16510e68b0",
"0x9c601553e4d5d3a7e8d8cc891ebc9f5ecb43596d16c20276e120f21d37de67fb",
"0x2c80dec9092033203c8fad8a02481de03b581320504eead522e18210b29d140d",
"0xf1702d9f4ec11338556ee6195fe090b85bb04e770deed06954be12673f2deba8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

