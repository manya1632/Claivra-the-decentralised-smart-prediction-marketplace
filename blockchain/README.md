# Claivra Prediction Marketplace

This repository contains the smart contracts for Claivra, a decentralized prediction marketplace platform built on Ethereum. The platform enables users to create quizzes (predictions), place bets on outcomes, and earn rewards based on correct predictions.

## Features

- User registration system (Buyers, Organizers, Admins)
- Quiz creation and management
- Betting functionality with customizable options
- Automated result declaration and payouts
- Admin dashboard for platform management

## Setup & Installation

1. **Install dependencies:**
   ```shell
   npm install
   ```

2. **Compile contracts:**
   ```shell
   npx hardhat compile
   ```

## Testing

Run the comprehensive test suite to ensure contract functionality:

```shell
npx hardhat test
```

For detailed gas reporting:
```shell
REPORT_GAS=true npx hardhat test
```

## Local Development

1. **Start local Hardhat node:**
   ```shell
   npx hardhat node
   ```

2. **Deploy to local network:**
   ```shell
   npx hardhat run --network localhost scripts/deploy.js
   ```

## Deployment

### Test Networks

To deploy to a test network (e.g., Sepolia):

```shell
npx hardhat run --network sepolia scripts/deploy.js
```

### Production Deployment

For mainnet deployment:

```shell
npx hardhat run --network mainnet scripts/deploy.js
```

**Important:** Ensure you have proper environment variables set in your `.env` file:
```
PRIVATE_KEY=your_private_key_here
INFURA_API_KEY=your_infura_api_key
ETHERSCAN_API_KEY=your_etherscan_api_key
```

## Contract Verification

After deployment, verify your contract on Etherscan:

```shell
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
```

## Project Structure

```
blockchain/
├── contracts/         # Smart contract source files
├── scripts/           # Deployment and interaction scripts
├── test/              # Test files for contracts
├── ignition/          # Hardhat Ignition modules
└── hardhat.config.js  # Hardhat configuration
```

## Commands Reference

```shell
npx hardhat help                                   # Show all available commands
npx hardhat clean                                  # Clear cache and artifacts
npx hardhat accounts                               # List accounts
npx hardhat ignition deploy ./ignition/modules/    # Deploy using Ignition
npx hardhat coverage                               # Generate test coverage report
```

## License

This project is licensed under the MIT License - see the LICENSE file