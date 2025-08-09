# LinkShield - Blockchain-Powered URL Protection

[![Solidity](https://img.shields.io/badge/Solidity-0.8.25-%23363636?logo=solidity)](https://soliditylang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-000000?logo=nextdotjs)](https://nextjs.org/)
[![web3.js](https://img.shields.io/badge/web3.js-4.5.0-F16822?logo=web3dotjs)](https://web3js.org/)

LinkShield is a decentralized application that protects URLs using blockchain technology. Created during **Web3 Week**, this project demonstrates core Web3 concepts including smart contract development, blockchain interactions, and decentralized application architecture.

👉 **Live Demo**: [https://link-shield-dapp.vercel.app/](https://link-shield-dapp.vercel.app/)  
📺 **Web3 Week**: [Web3 Week - LuizTools](https://www.luiztools.com.br/w3w-3.html#inscricao)

## Key Features

- Securely register URLs on the Ethereum blockchain
- Set custom click fees for monetization
- Verify link authenticity through smart contracts
- Full decentralized ownership control
- Simple user interface for Web3 beginners

## Technology Stack

| Component          | Technology               |
|--------------------|--------------------------|
| Frontend Framework | Next.js 14 (React)       |
| Smart Contracts    | Solidity 0.8.25          |
| Blockchain Library | web3.js 4.5             |
| Development Chain  | Tenderly            |
| UI Framework       | Bootstrap                |

## Project Structure

```bash
src/
├── app/
│   ├── page.js             # Main application page
│   └── [linkid]/page.js    # Dynamic route for protected links
│
├── services/
│   ├── LinkShield.sol      # Smart contract
│   ├── ABI.json            # Contract Application Binary Interface
│   └── Web3Service.js      # Blockchain interaction service
│
├── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- MetaMask wallet
- Testnet ETH (Sepolia/Goerli) or local blockchain (Anvil)
- Foundry (for contract deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Xang0/LinkShield.git
   cd LinkShield
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Access the application at:
   [http://localhost:3000](http://localhost:3000)

## Smart Contract Deployment

1. Open [Remix IDE](https://remix.ethereum.org/)
2. Create new file `LinkShield.sol` and paste contract code
3. Compile with Solidity 0.8.25 compiler
4. Deploy to your preferred network:
   - Local development (Anvil)
   - Ethereum testnet (Sepolia)
   - Tenderly virtual network
5. Copy deployed contract address
6. Update contract address in `Web3Service.js`:

   ```javascript
   const CONTRACT_ADDRESS = "0xYourDeployedContractAddress";
   ```

## Usage Guide

1. **Connect Wallet**  
   Click "Connect" to link your MetaMask wallet

2. **Register URL**  
   Enter your target URL and set click fee

3. **Share Protected Link**  
   Use generated LinkShield URL (format: `/links/[linkid]`)

4. **Monetize Clicks**  
   Earn fees when users access through your protected link

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Linkedin: [Alexandre Filho](www.linkedin.com/in/alexandre-filho-128127260)

Email: [Gmail](carvalhaesfilho0@gmail.com)

Project Link: [https://github.com/Xang0/LinkShield](https://github.com/Xang0/LinkShield)

This README presents LinkShield as a professional project while maintaining its educational roots from Web3 Week. The structure helps both technical evaluators understand your implementation and new developers learn from your work.
