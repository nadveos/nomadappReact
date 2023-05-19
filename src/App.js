
import './App.css';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, goerli } from 'wagmi/chains'

const chains = [ mainnet, goerli]
const projectId = '64b7bbdf83000fb0da7a0851f7554852'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function App() {
  return (
    <div className='App'>
        

  
      <WagmiConfig config={wagmiConfig}>
        <h1>NomadApp Connect</h1>
        <Web3Button></Web3Button>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  
    </div>
  )
}
export default App;
