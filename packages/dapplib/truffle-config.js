require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'heavy prize flee venture strike cost misery million hockey another army giant'; 
let testAccounts = [
"0xb5836c35f00a7e2c74ba065d173a70506d54553e056ed2ae8e5234e920432c90",
"0xede372d2ed9ef992c680545237b81d1afe9487e8767b9c3374e13d968cabc592",
"0x6cd47aef4820bfd59cdbaf7edf4f74090809197268bd027033d827130cce78e4",
"0x3dbe0975c5c7c719d370c0b31a83c812f686789e00be49b6a42c460adeaf388d",
"0x2156745f3eb124ee3fe11db1cea765f41d8e7172877485b6734c5e528a9b5dbe",
"0x934d7ed426ea3c75a24a0e03f3f59e88d38f311b187703a19eb43543ee7a88de",
"0x91197661120e05a360059e3261592ca0350fdec266b04ae94fcad1224e20ce15",
"0xc2d82dee9f026f6a93c75355591136a5654a121185c8c3641e816ce5af800a0a",
"0xd123c5d39817dece7e361fbe6504fdb8247899b1251dd79c3ae3d3fb42b7d62c",
"0xae649776cf82cf3cc6040c64a18e1b5aeca23c99259bdd9398f9ff5398aaf1bb"
]; 
let devUri = 'http://test.confluxrpc.org';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

