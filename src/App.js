
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Button, Web3Modal } from '@web3modal/react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { goerli, mainnet } from 'wagmi/chains';
import './App.css';

const chains = [ mainnet, goerli]
const projectId = process.env.PROJECT_ID

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  return (
    <div className='App'>
        

  
      <WagmiConfig config={wagmiConfig}>
        <img src='NomadaaCircle.png' alt=''></img>
        <h1>NomadApp Connect</h1>
        <Web3Button></Web3Button>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  
    </div>
  )
}
export default App;
